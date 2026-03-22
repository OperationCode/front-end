import { NextResponse, type NextRequest } from 'next/server';
import Airtable from 'airtable';
import { AIR_TABLE_BASE_ID, AIR_TABLE_TABLE_NAME } from 'common/config/environment';
import type { UpdateProfileFormShape } from 'components/Forms/UpdateProfileForm/UpdateProfileForm';

const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(AIR_TABLE_BASE_ID);

export async function PATCH(request: NextRequest) {
  const email = request.cookies.get('opCodeApplicantEmail')?.value;

  if (!email) {
    return NextResponse.json({ message: 'Missing registration cookie' }, { status: 401 });
  }

  try {
    const records = await base(AIR_TABLE_TABLE_NAME)
      .select({ filterByFormula: `{Email} = '${email}'` })
      .firstPage();

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
        finalize: shouldFinalize,
      } = (await request.json()) as Partial<UpdateProfileFormShape> & { finalize?: boolean };

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

      const parsedPayload = Object.fromEntries(
        Object.entries(payload).filter(([, value]) => {
          if (!value) return false;
          if (Array.isArray(value) && value.length === 0) return false;
          if (value === '') return false;
          return true;
        }),
      );

      const response = NextResponse.json({ message: 'Success' });

      if (shouldFinalize) {
        response.cookies.set('opCodeApplicantEmail', '', {
          path: '/',
          expires: new Date(0),
        });
      }

      await base(AIR_TABLE_TABLE_NAME).update(relevantRecord.id, parsedPayload);

      return response;
    } else {
      const response = NextResponse.json(
        { message: `No record found for this email (${email})` },
        { status: 404 },
      );
      response.cookies.set('opCodeApplicantEmail', '', {
        path: '/',
        expires: new Date(0),
      });
      return response;
    }
  } catch (error) {
    console.error('Error with /api/registration/update PATCH request:', error);
    return NextResponse.json({ message: 'Server Error' }, { status: 500 });
  }
}
