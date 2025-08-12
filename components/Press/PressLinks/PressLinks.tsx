import * as Tabs from '@radix-ui/react-tabs';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import { objectKeys } from 'utils/types';
import { cx } from 'common/utils/cva';
import * as Articles from './Articles';

function PressLinks() {
  return (
    <div className="w-full sm:w-[70ch] md:w-[60ch]">
      <Tabs.Root defaultValue={Object.keys(Articles)[0]}>
        <Tabs.List className="flex pt-5">
          {Object.keys(Articles).map(region => (
            <Tabs.Trigger
              key={`TabsTrigger_${region}`}
              value={region}
              className={cx(
                'flex-1 cursor-pointer',
                'border-b-2 border-primary/20 hover:border-primary/60',
                'data-[state=active]:border-primary',
              )}
            >
              <h3>{region}</h3>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {objectKeys(Articles).map(region => (
          <Tabs.Content
            key={`TabsContent_${region}`}
            value={region}
            className="p-5 space-y-2.5 text-balance list-none text-center"
          >
            {Articles[region].map((link: { url: string; title: string }) => (
              <li key={`GroupLink_${link.url}`}>
                <OutboundLink
                  href={link.url}
                  analyticsEventLabel="Press Article"
                  className="text-sm text-primary no-underline transition-colors duration-200 ease-linear hover:text-white focus-visible:text-white"
                >
                  {link.title}
                </OutboundLink>
              </li>
            ))}
          </Tabs.Content>
        ))}
      </Tabs.Root>
    </div>
  );
}

export default PressLinks;
