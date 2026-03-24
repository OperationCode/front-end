import { cx } from '@/common/utils/cva';
import Section from '@/components/Section/Section';

const fonts = ['Bebas Neue' as const, 'Encode Sans' as const];

function FontSection() {
  const demoText = 'Sphinx of black quartz, judge my vow!';

  return (
    <Section title="Typography" theme="gray" underline>
      <ul className="mx-auto list-none [&>li]:m-4">
        {fonts.map((font) => (
          <li key={font}>
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
      </ul>
    </Section>
  );
}

export default FontSection;
