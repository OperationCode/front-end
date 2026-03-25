import * as Tabs from '@radix-ui/react-tabs';
import OutboundLink from '@/components/OutboundLink/OutboundLink';
import { cn } from '@/lib/utils';
import * as articlesMap from './Articles';

function PressLinks() {
  return (
    <div className="w-full sm:w-[70ch] md:w-[60ch]">
      <Tabs.Root defaultValue={Object.keys(articlesMap)[0]}>
        <Tabs.List className="flex pt-5">
          {Object.keys(articlesMap).map((region) => (
            <Tabs.Trigger
              key={`TabsTrigger_${region}`}
              value={region}
              className={cn(
                'flex-1 cursor-pointer',
                `border-b-2 border-primary/20 hover:border-primary/60`,
                'data-[state=active]:border-primary',
              )}
            >
              <h3>{region}</h3>
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        {Object.keys(articlesMap).map((region) => (
          <Tabs.Content
            key={`TabsContent_${region}`}
            value={region}
            className="list-none space-y-2.5 p-5 text-center text-balance"
          >
            {articlesMap[region as keyof typeof articlesMap].map((link) => (
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
