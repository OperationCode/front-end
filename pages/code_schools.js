import Head from 'components/head';
import { getCodeSchoolsPromise } from 'common/constants/api';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';
import Section from 'components/_common_/Section/Section';

export default class CodeSchools extends React.Component {
  state = {
    schools: [],
  };

  async componentDidMount() {
    const { data } = await getCodeSchoolsPromise();
    this.setState({ schools: data });
  }

  render() {
    const { state } = this;

    return (
      <>
        <Head title="Code Schools" />

        <Section theme="white" title="Code Schools">
          <p>
            Code schools are accelerated learning programs that will prepare you for a career in
            software development. Each school listed below ranges in length, vary in tuition costs,
            and in programming languages. Desirable from an employer&apos;s standpoint, code schools
            are founded by software developers who saw a need for more programmers and aspired to
            teach the next generation. We encourage you to check out the schools below, do your
            research, and ask fellow techies in our Slack Community.
          </p>

          <aside style={{ textAlign: 'center' }}>
            <h6>Would you like your school listed here?</h6>
            <p>
              Please fill out our request form,{' '}
              <OutboundLink
                analyticsEventLabel="Code School Add Request"
                href="https://op.co.de/code-school-request"
              >
                here
              </OutboundLink>
              .
            </p>
          </aside>
        </Section>
        <Section theme="gray" title="Schools" hasHeadingLines={false}>
          {state.schools.map(school => (
            <div key={`${Math.random()}`}>{school.name}</div>
          ))}
        </Section>
      </>
    );
  }
}
