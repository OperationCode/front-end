import { Content } from 'components/Content/Content';
import { fontsObject } from 'common/styles/styleExports';

export function FontSection() {
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
                <div
                  className={
                    fontsObject[item] === 'DIN Condensed Bold'
                      ? '[&>p]:font-serif [&>h6]:font-serif [&>p]:font-dinCondensed [&>h6]:font-dinCondensed'
                      : '[&>p]:font-sans [&>p]:font-encodeSans [&>h6]:font-sans [&>h6]:font-encodeSans'
                  }
                >
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
