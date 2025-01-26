import { NextApiRequest, NextApiResponse } from 'next';
import Airtable from 'airtable';
import { AIR_TABLE_BASE_ID, AIR_TABLE_TABLE_NAME } from 'common/config/environment';
import { RegistrationFormValues } from 'components/Forms/RegistrationForm/RegistrationForm';

const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(AIR_TABLE_BASE_ID);

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { email, firstName, lastName, zipcode } = req.body as RegistrationFormValues;

  try {
    // Search for a record with the relevant email
    const records = await base(AIR_TABLE_TABLE_NAME)
      .select({ filterByFormula: `{Email} = '${email}'` })
      .firstPage();

    // Record found, return initial values
    if (records.length > 0) {
      const record = records[0];
      await base(AIR_TABLE_TABLE_NAME).update(record.id, {
        'Company Name': 'Capsule',
      });

      return res
        .status(409)
        .json({ message: `This email has already been registered with an application.` });
    }

    // No record found, add a new row to the table
    await base(AIR_TABLE_TABLE_NAME).create({
      Name: lastName ? `${firstName} ${lastName}` : firstName,
      Email: email,
      Zipcode: zipcode,
      Date: new Date().toISOString(),
    });

    res.setHeader('Set-Cookie', `opCodeApplicantEmail=${email}; Path=/; HttpOnly`);
    return res.status(200).json({ message: 'Success' });
  } catch (error) {
    console.error('Error with /api/registration/new POST request:', error);
    return res
      .status(500)
      .json({ message: `Unexpected Error: Please contact us via staff@operationcode.org` });
  }
}
