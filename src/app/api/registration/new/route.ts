import { NextResponse, type NextRequest } from 'next/server';
import Airtable from 'airtable';
import { AIR_TABLE_BASE_ID, AIR_TABLE_TABLE_NAME } from '@/common/config/environment';
import type { RegistrationFormValues } from '@/components/Forms/RegistrationForm/RegistrationForm';

const base = new Airtable({ apiKey: process.env.AIRTABLE_PAT }).base(AIR_TABLE_BASE_ID);

export async function POST(request: NextRequest) {
  const { email, firstName, lastName, zipcode } = (await request.json()) as RegistrationFormValues;

  try {
    const records = await base(AIR_TABLE_TABLE_NAME)
      .select({ filterByFormula: `{Email} = '${email}'` })
      .firstPage();

    if (records.length > 0) {
      return NextResponse.json(
        { message: `This email has already been registered with an application.` },
        { status: 409 },
      );
    }

    await base(AIR_TABLE_TABLE_NAME).create({
      Name: lastName ? `${firstName} ${lastName}` : firstName,
      Email: email,
      Zipcode: zipcode,
      Date: new Date().toISOString(),
    });

    const response = NextResponse.json({ message: 'Success' });
    response.cookies.set('opCodeApplicantEmail', email, { path: '/', httpOnly: true });
    return response;
  } catch (error) {
    console.error('Error with /api/registration/new POST request:', error);
    return NextResponse.json(
      { message: `Unexpected Error: Please contact us via staff@operationcode.org` },
      { status: 500 },
    );
  }
}
