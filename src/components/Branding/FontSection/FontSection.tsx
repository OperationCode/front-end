import { cx } from '@/common/utils/cva';
import Content from '@/components/Content/Content';

const fonts = ['Bebas Neue' as const, 'Encode Sans' as const];

function FontSection() {
  const demoText = 'Sphinx of black quartz, judge my vow!';

  return (
    <Content
      title="Typography"
      theme="gray"
      hasTitleUnderline
      columns={[
        <ul key="fonts" className="mx-auto list-none [&>li]:m-4">
          {fonts.map((font) => (
            <li key={font}>
              {/* <div className={`[&>p]:${font.className} [&>h6]:${font.className}`}> */}
              <div
                className={cx({
                  'font-family-bebas': font === 'Bebas Neue',
                  'font-family-encode': font === 'Encode Sans',
                })}
              >
                <h6 className="font-[inherit]">{font}</h6>
                <p className="font-[inherit]">{demoText}</p>
              </div>
            </li>
          ))}
        </ul>,
      ]}
    />
  );
}

export default FontSection;
