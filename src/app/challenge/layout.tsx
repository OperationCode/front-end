import type { ReactNode } from 'react';
import range from 'lodash/range';
import HeroBanner from '@/components/HeroBanner/HeroBanner';
import Section from '@/components/Section/Section';
import challengers from '@/static/operationcode_challenge/names';

function NamesColumns() {
  const numberNamesPerColumn = 20;
  const numberCols = Math.floor(challengers.length / numberNamesPerColumn) + 1;
  const columns = range(1, numberCols + 1);

  return columns.map((columnNumber, index) => {
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
}

export default function ChallengeLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <HeroBanner title="Operation Code Challenge" className="min-h-[60dvh]">
        <p>
          Welcome to the Operation Code challenge! The goal of this challenge is to get you to
          easily commit your first change to a program, see the results of the change, and leave
          your mark on Operation Code itself! To do this we're going to take a look at a source code
          repository, clone the repository, make a change to a file and finally create a pull
          request.
        </p>
      </HeroBanner>

      {children}

      <Section title="Your Name Here" underline>
        <div>
          <h6 className="text-center">
            Here is a list of the people that have completed this before you:
          </h6>
          <div className="[&_div]:m-0 [&_div]:w-[85vw]">
            <Section>
              <NamesColumns />
            </Section>
          </div>
        </div>
      </Section>
    </div>
  );
}
