import type { NextApiRequest, NextApiResponse } from 'next';
import Airtable from 'airtable';
import { AIR_TABLE_BASE_ID, AIR_TABLE_TABLE_NAME } from 'common/config/environment';
import type { UpdateProfileFormShape } from 'components/Forms/UpdateProfileForm/UpdateProfileForm';

const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(AIR_TABLE_BASE_ID);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'PATCH') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const email = req.cookies?.opCodeApplicantEmail;

  // The cookie is cleared on the final successful step (when all fields are filled).
  // Additional PATCH requests can still arrive after that (e.g. user double-clicking),
  // so we need to bail out early rather than querying Airtable with an undefined email.
  if (!email) {
    return res.status(401).json({ message: 'Missing registration cookie' });
  }

  try {
    // Search for a record with the relevant email
    const records = await base(AIR_TABLE_TABLE_NAME)
      .select({ filterByFormula: `{Email} = '${email}'` })
      .firstPage();

    // Record found, return initial values
    if (records.length > 0) {
      const relevantRecord = records[0];

      const {
        companyName,
        companyRole,
        employmentStatus,
        militaryAffiliation,
        branchOfService: selectedBranchOfServiceOptions,
        payGrade,
        joinReason: selectedJoinReasonOptions,
        gender,
        ethnicity: selectedEthnicityOptions,
        educationLevel,
      } = req.body as Partial<UpdateProfileFormShape>;

      const branchOfService = selectedBranchOfServiceOptions?.map(option => option.value) ?? [];
      const ethnicity = selectedEthnicityOptions?.map(option => option.value) ?? [];
      const joinReason = selectedJoinReasonOptions?.map(option => option.value) ?? [];

      let militaryBranch = branchOfService;
      if (militaryAffiliation?.includes('spouse')) {
        militaryBranch = ['Military family member'];
      } else if (militaryAffiliation?.startsWith('Non')) {
        militaryBranch = ['Not affiliated with the military'];
      }

      const payload = {
        'Employment Status': employmentStatus,
        'Company Name': companyName,
        'Role At Company': companyRole,
        'Military Affiliation': militaryAffiliation,
        'Military Branch': militaryBranch,
        'Military Rank': payGrade,
        'Join Reason': joinReason,
        Gender: gender,
        Ethnicity: ethnicity,
        'Education Level': educationLevel,
      };

      /**
       * Since we call this endpoint as the user progresses through the
       * form, we may not have all the fields defined. AirTable can then
       * throw an error because value would not match the expected type
       * for many fields.
       */
      const parsedPayload = Object.fromEntries(
        Object.entries(payload).filter(([, value]) => {
          // No undefined keys
          if (!value) return false;

          // No empty arrays
          if (Array.isArray(value) && value.length === 0) return false;

          // No empty strings
          if (value === '') return false;

          return true;
        }),
      );

      /**
       * If all fields are defined, the row is done! 🎉
       * Now, we remove the cookie maintaining form state.
       */
      if (Object.values(payload).filter(val => !val).length === 0) {
        res.setHeader('Set-Cookie', [
          `opCodeApplicantEmail=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
        ]);
      }

      // Update the record with the new values
      await base(AIR_TABLE_TABLE_NAME).update(relevantRecord.id, parsedPayload);

      return res.status(200).json({ message: 'Success' });
    }

    // No record found — clear the stale cookie so the page guard redirects to /
    res.setHeader('Set-Cookie', [
      `opCodeApplicantEmail=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT`,
    ]);
    return res.status(404).json({ message: `No record found for this email (${email})` });
  } catch (error) {
    console.error('Error with /api/registration/update PATCH request:', error);
    return res.status(500).json({ message: 'Server Error' });
  }
}
