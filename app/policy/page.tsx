import type { Metadata } from 'next';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import { s3 } from 'common/constants/urls';

export const metadata: Metadata = { title: 'Policy' };

function Policy() {
  return (
    <div>
      <HeroBanner
        backgroundImageSource={`${s3}redesign/heroBanners/policy.jpg`}
        title="Modernize the GI Bill"
        className="min-h-dvh"
      >
        <h6>
          We demanded that Congress develop policies to make veterans more competitive for careers
          in the tech sector. Mission accomplished!
        </h6>

        <div className="mt-12 flex flex-col">
          <figure className="m-0 flex max-w-92.5 bg-[rgba(0,5,30,0.7)] p-2">
            <div className="flex shrink-0 grow items-center pr-4 pl-2 text-[2rem]/8 text-primary md:grow-0 lg:text-[2.5rem]/10">
              2%
            </div>
            <div className="text-2xl/[1.7rem] text-white">
              Percentage of the tech industry that are veterans.
            </div>
          </figure>

          <figure className="m-0 mt-4 flex max-w-125 bg-[rgba(0,5,30,0.7)] p-2">
            <div className="flex shrink-0 grow items-center pr-4 pl-2 text-[2rem]/8 text-primary md:grow-0 lg:text-[2.5rem]/10">
              1,600,000+
            </div>
            <div className="text-2xl/[1.7rem] text-white">
              Software development job postings between 2016 and 2017.
            </div>
          </figure>
        </div>
      </HeroBanner>
    </div>
  );
}

export default Policy;
