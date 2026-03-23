import type { Metadata } from 'next';
import range from 'lodash/range';
import Image from 'next/image';
import { s3 } from '@/common/constants/urls';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Content from '@/components/Content/Content';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import challengers from '@/static/operationcode_challenge/names';

export const metadata: Metadata = { title: 'Challenge' };

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
      <ol
        key={columnNumber}
        start={startIndex + 1}
        className="basis-[225px] list-inside self-start p-0"
      >
        {namesInColumn.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ol>
    );
  });

  return content;
};

function Challenge() {
  return (
    <div>
      <HeroBanner title={`Operation Code ${pageTitle}`} className="min-h-[60dvh]">
        <p>
          Welcome to the Operation Code challenge! The goal of this challenge is to get you to
          easily commit your first change to a program, see the results of the change, and leave
          your mark on Operation Code itself! To do this we're going to take a look at a source code
          repository, clone the repository, make a change to a file and finally create a pull
          request.
        </p>
      </HeroBanner>

      <Content
        title="Let's get started!"
        theme="white"
        columns={[
          <div key="instructions">
            <ol className="m-0 p-0 pl-[5px] leading-normal [&_img]:h-auto [&_img]:max-w-full [&_img]:px-[10px] [&_li]:pb-[25px]">
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
                In a few moments, you will be redirected to your own copy of this website's source
                code.
                <br />
                <br />
                <b>Congratulations! You have “forked” the “repo”!</b>
              </li>

              <li>
                Now that you have a fork of the “repo”, it's time to edit the necessary file to add
                your name to the list below! Go to the <code>/public</code>
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
                In the input field with “Update names.js”, type{' '}
                <code>Add &lt;YOUR NAME&gt; to challenge list</code>. You will leave the second,
                large input field blank. There are two “radio” buttons below the input fields. Check
                the one that says “Create a new branch”. Your screen should now have something like
                this:
                <br />
                <br />
                <Image
                  src={`${s3}github_demo/example.png`}
                  alt="screenshot of what the screen should look like on GitHub thus far"
                  className="p-0!"
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
                  Operation Code's front-end repository
                </OutboundLink>
                .
              </li>

              <li>
                Click on the “Pull requests” tab. It rests between the “Issues” and “Project” tabs.
              </li>

              <li>Click on the green “New pull request” button.</li>

              <li>
                You should now be at the “<b>Open a pull request</b>“ screen. We do not wish to ask
                ourselves for permission to merge our new branch into our own fork! Instead,&nbsp;
                click{' '}
                <OutboundLink analyticsEventLabel="Challenge Engagement" href={CompareLink}>
                  {' '}
                </OutboundLink>
                &nbsp;, to open Operation Code's “New pull request” interface. You should see a
                “Compare changes” headline. Just below that is a link within the text:&nbsp;
                'compare across forks' - click it. Now, click on the selector that says ' head fork'
                at the beginning, and choose your fork. Click the next selector to the right, and
                choose your new branch. Now, you're comparing Operation Code's main branch with your
                new fork's branch, and you may click
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
                source software - like Operation Code's website! When you submit a pull request it
                notifies the maintainers of the project, and runs some automated checks. The
                maintainers then look at the new changes, and decide if they want it merged into
                their repository.
              </blockquote>
              <br />
              <li>
                When you're ready, click the “Create pull request” button. Our staff will be
                notified and a few minutes after the pull request is accepted and merged your name
                will show up below!
              </li>
            </ol>
            <h6 className="text-center">
              Congratulations - you've made your first open source commit!
            </h6>
          </div>,
        ]}
      />

      <Content
        title="Your Name Here"
        hasTitleUnderline
        columns={[
          <div key="names">
            <h6 className="text-center">
              Here is a list of the people that have completed this before you:
            </h6>
            <div className="[&_div]:m-0 [&_div]:w-[85vw]">
              <Content columns={[<NamesColumns key="names-columns" />]} />
            </div>
          </div>,
        ]}
      />
    </div>
  );
}

export default Challenge;
