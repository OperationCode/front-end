import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import UpdateProfileForm from 'components/Forms/UpdateProfileForm/UpdateProfileForm';
import type { NextPage } from 'next';
import nextCookie from 'next-cookies';

const pageTitle = 'Update Profile';

const UpdateProfile: NextPage = () => {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} className="max-h-48 min-h-[auto]" />

      <Content theme="gray" columns={[<UpdateProfileForm />]} />
    </>
  );
};

UpdateProfile.getInitialProps = async ctx => {
  const { opCodeApplicantEmail } = nextCookie(ctx);

  // Redirect if server cookie is missing applicant email!
  if (!opCodeApplicantEmail) {
    if (ctx.res) {
      ctx.res.writeHead(302, { Location: '/' });
      ctx.res.end();
    }
  }

  return {};
};

export default UpdateProfile;
