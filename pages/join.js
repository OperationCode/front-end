import Head from 'components/head';
import HeroBanner from 'components/HeroBanner/HeroBanner';
import Content from 'components/Content/Content';
import styles from 'styles/join.module.css';

const pageTitle = 'Join';

function Join() {
  return (
    <>
      <Head title={pageTitle} />
      <HeroBanner title={pageTitle} />

      <Content
        theme="gray"
        columns={[
          <div className={styles.joinForm}>
            <script
              src="https://cdn.virtuoussoftware.com/virtuous.embed.min.js"
              fetchpriority="high"
              data-vform="925226EB-B502-4DAF-A38F-FAFBB8C98146"
              data-orgId="3423"
              data-isGiving="false"
              data-dependencies="[]"
            />
          </div>,
        ]}
      />
    </>
  );
}

export default Join;
