import { useEffect } from 'react';

const ZipRecruiterJobs = () => {
  useEffect(() => {
    const zipRecruiterScript = document.createElement('script');

    // eslint-disable-next-line unicorn/prevent-abbreviations
    zipRecruiterScript.src =
      'https://www.ziprecruiter.com/jobs-widget/pro/v2/63bjfya4arc58ywaxtvi8jkchvzymeep';

    document.body.append(zipRecruiterScript);

    const initializeZipRecruiter = zipsearch => {
      const options = {
        container: 'zipsearch_container',
        alerts_api_key: 'mnsiawwpjgk5i4u42awbp5kdhs8gpy26',
        search: 'software engineer',
        jobs_per_page: '20',
        days_ago: '30',
        font_family: 'Tahoma',
      };

      zipsearch.init(options);
    };

    const tryRunInit = () => {
      if (window.zipsearch) {
        return initializeZipRecruiter(window.zipsearch);
      }

      return setTimeout(tryRunInit, 500);
    };

    tryRunInit();
  }, []);

  return <div id="zipsearch_container" />;
};

export default ZipRecruiterJobs;
