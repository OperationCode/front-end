import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import type { Metadata } from 'next';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import UpdateProfileForm from 'components/Forms/UpdateProfileForm/UpdateProfileForm';

export const metadata: Metadata = { title: 'Update Profile' };

const pageTitle = 'Update Profile';

export default async function UpdateProfile() {
  const cookieStore = await cookies();
  const opCodeApplicantEmail = cookieStore.get('opCodeApplicantEmail');

  if (!opCodeApplicantEmail) {
    redirect('/');
  }

  return (
    <>
      <HeroBanner title={pageTitle} className="max-h-48 min-h-auto" />

      <Content theme="gray" columns={[<UpdateProfileForm key="form" />]} />
    </>
  );
}
