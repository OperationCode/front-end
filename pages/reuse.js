import Head from 'components/head';
import LogoSection from 'components/Branding/LogoSection/LogoSection';
import ColorSection from 'components/Branding/ColorSection/ColorSection';
import FontSection from 'components/Branding/FontSection/FontSection';
import HeroBanner from 'components/_common_/HeroBanner/HeroBanner';
import OutboundLink from 'components/_common_/OutboundLink/OutboundLink';



const Branding = () => (
  <>
    <Head title="Reuse Components" />

    <HeroBanner title="Reuse Components">

      {/* <style>

        .article {
          width: 300px;
        border: 1px solid #blue;
      }
      
      </style> */}

      <h6>Flat Card</h6>


      <article>
        <h1>Title or Name</h1>
        <h6>Optional Title</h6>
        <img />
        <hr />
        <p></p>
      </article>

      <p>
        The size ratio between the star and the medallion changes depending on the size of
        reproduction. Please make use of the appropriate sized logo when creating collateral.
      </p>
      <p>
        In most cases, use the blue-accent version of the logo. The red-accent is delivered for
        special uses only.
      </p>

    </HeroBanner>

  </>
);

export default Branding;
