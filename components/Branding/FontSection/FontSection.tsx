import Content from 'components/Content/Content';

const fonts = [
  { name: 'DIN Condensed Bold', className: 'font-din-condensed' },
  { name: 'Encode Sans', className: 'font-encode-sans' },
];

function FontSection() {
  const demoText = 'Sphinx of black quartz, judge my vow!';

  return (
    <Content
      title="Typography"
      theme="gray"
      hasTitleUnderline
      columns={[
        <ul key="fonts" className="list-none [&>li]:m-4 mx-auto">
          {fonts.map(font => (
            <li key={font.name}>
              <div className={`[&>p]:${font.className} [&>h6]:${font.className}`}>
                <h6>{font.name}</h6>
                <p>{demoText}</p>
              </div>
            </li>
          ))}
        </ul>,
      ]}
    />
  );
}

export default FontSection;
