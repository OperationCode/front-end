import nextCookie from 'next-cookies';
import get from 'lodash/get';
import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import UpdateProfileForm from 'components/Forms/UpdateProfileForm/UpdateProfileForm';
import withAuthSync from 'decorators/withAuthSync/withAuthSync';
import { getUserPromise } from 'common/constants/api';
import { NextPage } from 'next';

const pageTitle = 'Update Profile';

interface UpdateProfileProps {
  initialValues?: {
    programmingLanguages: string[];
    disciplines: string[];
    branchOfService: string;
    yearsOfService: string;
    payGrade: string;
    militaryStatus: string;
    employmentStatus: string;
    companyName: string;
    companyRole: string;
  };
}

const UpdateProfile: NextPage<UpdateProfileProps> = ({ initialValues }: UpdateProfileProps) => {
  return (
    <>
      <Head title={pageTitle} />

      <HeroBanner title={pageTitle} />

      <Content theme="gray" columns={[<UpdateProfileForm initialValues={initialValues} />]} />
    </>
  );
};

UpdateProfile.defaultProps = {
  initialValues: undefined,
};

UpdateProfile.getInitialProps = async ctx => {
  const { token } = nextCookie(ctx);
  const { data } = await getUserPromise({ token });

  // We get disciplines and programmingLanguages as a comma-separated string back from the server
  // Turn it into an array if trying to populate initialValues.
  const disciplines = get(data, 'disciplines') || '';
  const programmingLanguages = get(data, 'programmingLanguages') || '';

  const formattedData = {
    ...data,
    disciplines: disciplines.split(', '),
    programmingLanguages: programmingLanguages.split(', '),
  };

  return {
    initialValues: { ...UpdateProfileForm.defaultProps.initialValues, ...formattedData },
  };
};

export default withAuthSync(UpdateProfile);
