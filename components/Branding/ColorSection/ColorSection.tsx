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
    <div className="text-center">
      <Content
        title="Colors"
        hasTitleUnderline
        theme="white"
        columns={[
          <div key="primary">
            <h3>Primary</h3>
            <Swatch colorName={primaryColor.name} hexCode={primaryColor.hexCode} />
          </div>,
          <div key="secondary">
            <h3>Secondary</h3>
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
    </div>
  );
}

export default ColorSection;
