import * as Tabs from '@radix-ui/react-tabs';
import OutboundLink from 'components/OutboundLink/OutboundLink';
import * as Articles from './Articles';
import styles from './PressLinks.module.css';

function PressLinks() {
  return (
    <div className={styles.logos}>
      <div className={styles.flexContainer}>
        <Tabs.Root defaultValue={Object.keys(Articles)[0]}>
          <Tabs.List className={styles.tabsList}>
            {Object.keys(Articles).map(region => (
              <Tabs.Trigger
                key={`TabsTrigger_${region}`}
                value={region}
                className={styles.tabsTrigger}
              >
                <h3>{region}</h3>
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {Object.keys(Articles).map(region => (
            <Tabs.Content
              key={`TabsContent_${region}`}
              value={region}
              className={styles.tabsContent}
            >
              {(Articles as Record<string, any>)[region].map(
                (link: { url: string; title: string }) => (
                  <li key={`GroupLink_${link.url}`}>
                    <OutboundLink href={link.url} analyticsEventLabel="Press Article">
                      {link.title}
                    </OutboundLink>
                  </li>
                ),
              )}
            </Tabs.Content>
          ))}
        </Tabs.Root>
      </div>
    </div>
  );
}

export default PressLinks;
