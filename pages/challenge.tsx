import range from 'lodash/range';
import styles from 'styles/challenge.module.css';
import Image from 'next/legacy/image';
import { s3 } from '@/common/constants/urls';
import { Head } from '@/components/Head';
import { HeroBanner } from '@/components/HeroBanner/HeroBanner';
import { Content } from '@/components/Content/Content';
import { OutboundLink } from '@/components/OutboundLink/OutboundLink';
import challengers from '@/public/static/operationcode_challenge/names';

const pageTitle = 'Challenge';

const RepoLink = 'https://github.com/OperationCode/front-end/';
const ChallengeLink = `${RepoLink}blob/main/pages/challenge.js`;
const CompareLink = `${RepoLink}compare`;

export const NamesColumns = () => {
  const numberNamesPerColumn = 20;
  const numberCols = Math.floor(challengers.length / numberNamesPerColumn) + 1;
  const columns = range(1, numberCols + 1);

  const content = columns.map((columnNumber, index) => {
    const startIndex = index * numberNamesPerColumn;
    const endIndex = columnNumber * numberNamesPerColumn;
    const namesInColumn = challengers.slice(startIndex, endIndex);

    return (
      <ol key={columnNumber} start={startIndex + 1} className={styles.challengerListColumn}>
        {namesInColumn.map(name => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    );
  });

  return content;
};

function Challenge() {
  return (
    <div className={styles.Challenge}>
      <Head title={pageTitle} />

      <HeroBanner title={`Operation Code ${pageTitle}`}>
        <p>
          Welcome to the Operation Code challenge! The goal of this challenge is to get you to
          easily commit your first change to a program, see the results of the change, and leave
          your mark on Operation Code itself! To do this we&apos;re going to take a look at a source
          code repository, clone the repository, make a change to a file and finally create a pull
          request.
        </p>
      </HeroBanner>

      <Content
        title="Let's get started!"
        theme="white"
        columns={[
          <div>
            <ol className={styles.instructionList}>
              <li>
                Firstly,{' '}
                <OutboundLink analyticsEventLabel="Challenge Engagement" href={RepoLink}>
                  visit our GitHub repository for this page
                </OutboundLink>
                . GitHub is a website dedicated to hosting source code. The code for this website is
                publically available! Take a moment to explore GitHub. You can see{' '}
                <OutboundLink analyticsEventLabel="Challenge Engagement" href={ChallengeLink}>
                  the code for this specific page
                </OutboundLink>
                .
              </li>

              <li>
                Secondly, fork the repository. Forking a repository takes a snapshot of the code and
                places that snapshot into your personal GitHub. GitHub allows you to contribute code
                between forks and their original repository. This process is how everybody
                contributes to open source. After forking, you will{' '}
                <OutboundLink analyticsEventLabel="Challenge Engagement" href={RepoLink}>
                  visit this link
                </OutboundLink>
                &nbsp; and click on the button near the top-right corner of the screen:{' '}
                <Image
                  src={`${s3}github_demo/fork-button.png`}
                  alt="screenshot of 'Fork' button on GitHub"
                  width={65}
                  height={65}
                />{' '}
                In a few moments, you will be redirected to your own copy of this website&apos;s
                source code.
                <br />
                <br />
                <b>Congratulations! You have &quot;forked&quot; the &quot;repo&quot;!</b>
              </li>

              <li>
                Now that you have a fork of the &quot;repo&quot;, it&apos;s time to edit the
                necessary file to add your name to the list below! Go to the <code>/public</code>
                {` folder`}, then the <code>/static</code> {` folder`}, click on the
                <code>operationcode_challenge</code> directory and click on the file called
                <code>names.js</code>. On the right-hand side, you should see
                <Image
                  src={`${s3}github_demo/pencil-icon.png`}
                  alt="a button with a pencil icon"
                  width={18}
                  height={18}
                />
                . Click it.
              </li>

              <li>Add your name to the bottom of the list of names.</li>

              <li>
                Scroll to the bottom for the <b>Commit changes</b> form. There are two input boxes.
                In the input field with &quot;Update names.js&quot;, type{' '}
                <code>Add &lt;YOUR NAME&gt; to challenge list</code>. You will leave the second,
                large input field blank. There are two &quot;radio&quot; buttons below the input
                fields. Check the one that says &quot;Create a new branch&quot;. Your screen should
                now have something like this:
                <br />
                <br />
                <Image
                  src={`${s3}github_demo/example.png`}
                  alt="screenshot of what the screen should look like on GitHub thus far"
                  className={styles.blockImage}
                  width={500}
                  height={500}
                />
                <br />
                <br />
                Once you confirm the similarities, click
                <Image
                  src={`${s3}github_demo/propose-button.png`}
                  alt="screensot of the 'Propose file change' button"
                  width={125}
                  height={125}
                />
              </li>

              <li>
                With your changes merged into your fork (your name added to the list in your copy of
                the code), head back to{' '}
                <OutboundLink analyticsEventLabel="Callenge Engagement" href={RepoLink}>
                  Operation Code&apos;s front-end repository
                </OutboundLink>
                .
              </li>

              <li>
                Click on the &quot;Pull requests&quot; tab. It rests between the &quot;Issues&quot;
                and &quot;Project&quot; tabs.
              </li>

              <li>Click on the green &quot;New pull request&quot; button.</li>

              <li>
                You should now be at the &quot;
                <b>Open a pull request</b>
                &quot; screen. We do not wish to ask ourselves for permission to merge our new
                branch into our own fork! Instead,&nbsp; click{' '}
                <OutboundLink analyticsEventLabel="Challenge Engagement" href={CompareLink}>
                  {' '}
                </OutboundLink>
                &nbsp;, to open Operation Code&apos;s &quot;New pull request&quot; interface. You
                should see a &quot;Compare changes&quot; headline. Just below that is a link within
                the text:&nbsp; &apos;compare across forks&apos; - click it. Now, click on the
                selector that says &apos; head fork&apos; at the beginning, and choose your fork.
                Click the next selector to the right, and choose your new branch. Now, you&apos;re
                comparing Operation Code&apos;s main branch with your new fork&apos;s branch, and
                you may click
                <Image
                  src={`${s3}github_demo/pr-button.png`}
                  alt="screenshot of the 'Create pull request' button"
                  width={115}
                  height={115}
                />
                to create your first Pull Request! We hope you come to love that button...
              </li>
              <blockquote>
                <i>
                  <u>NOTE:</u>
                </i>{' '}
                A pull request is how people throughout the world are able to contribute to open
                source software - like Operation Code&apos;s website! When you submit a pull request
                it notifies the maintainers of the project, and runs some automated checks. The
                maintainers then look at the new changes, and decide if they want it merged into
                their repository.
              </blockquote>
              <br />
              <li>
                When you&apos;re ready, click the &quot;Create pull request&quot; button. Our staff
                will be notified and a few minutes after the pull request is accepted and merged
                your name will show up below!
              </li>
            </ol>
            <h6 className={styles.centerText}>
              Congratulations - you&apos;ve made your first open source commit!
            </h6>
          </div>,
        ]}
      />

      <Content
        title="Your Name Here"
        hasTitleUnderline
        columns={[
          <div>
            <h6 className={styles.centerText}>
              Here is a list of the people that have completed this before you:
            </h6>
            <div className={styles.challengerListContainer}>
              <Content columns={[<NamesColumns />]} />
            </div>
          </div>,
        ]}
      />
    </div>
  );
}

export default Challenge;
