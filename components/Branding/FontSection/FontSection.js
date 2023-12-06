import Content from 'components/Content/Content';
import { fontsObject } from 'common/styles/styleExports';

function FontSection() {
  // Every letter of the alphabet in one string
  const demoText = 'Sphinx of black quartz, judge my vow!';

  return (
    <Content
      title="Typography"
      theme="gray"
      hasTitleUnderline
      columns={[
        <ul className="list-none w-full [&>li]:m-4">
          {Object.keys(fontsObject).map(item => {
            const fontStyle = {
              fontFamily: fontsObject[item],
            };
            return (
              <li key={item}>
                <div>
                  <h6 style={fontStyle}>{fontsObject[item]}</h6>
                  <p style={fontStyle}>{demoText}</p>
                </div>
              </li>
            );
          })}
        </ul>,
      ]}
    />
  );
}

export default FontSection;
