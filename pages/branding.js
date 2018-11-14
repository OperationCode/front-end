import Head from 'components/head';
import LogoSection from 'components/Branding/LogoSection/LogoSection';
import ColorSection from 'components/Branding/ColorSection/ColorSection';
import FontSection from 'components/Branding/FontSection/FontSection';

const Branding = () => (
  <>
    <Head title="Branding" />

    <LogoSection />
    <ColorSection />
    <FontSection />
  </>
);

export default Branding;
