import { brandColorsObject } from 'common/styles/styleExports';
import Swatch from 'components/Branding/Swatch/Swatch';
import Content from 'components/Content/Content';

function ColorSection() {
  const primaryColor = { name: 'Primary', hexCode: brandColorsObject.primary };
  const secondaryColor = { name: 'Secondary', hexCode: brandColorsObject.secondary };

  // Compose a list of colors excluding primary and secondary
  const otherColorNames = Object.keys(brandColorsObject).filter(colorName => {
    const isPrimary = colorName === 'primary';
    const isSecondary = colorName === 'secondary';

    return !isPrimary && !isSecondary;
  });

  return (
    <>
      <Content
        title="Colors"
        hasTitleUnderline
        theme="white"
        columns={[
          <div>
            <h3 className="text-center">Primary</h3>
            <Swatch colorName={primaryColor.name} hexCode={primaryColor.hexCode} />
          </div>,
          <div>
            <h3 className="text-center">Secondary</h3>
            <Swatch colorName={secondaryColor.name} hexCode={secondaryColor.hexCode} />
          </div>,
        ]}
      />
      <Content
        title="Other On-Brand Colors"
        theme="white"
        columns={otherColorNames.map(colorName => (
          <Swatch colorName={colorName} hexCode={brandColorsObject[colorName]} key={colorName} />
        ))}
      />
    </>
  );
}

export default ColorSection;
