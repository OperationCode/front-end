import { useEffect } from 'react';

interface ZipSearchOptions {
  container: string;
  alerts_api_key: string;
  search: string;
  jobs_per_page: string;
  days_ago: string;
  font_family: string;
}

interface ZipSearch {
  init: (options: ZipSearchOptions) => void;
}

declare global {
  interface Window {
    zipsearch?: ZipSearch;
  }
}

const ZipRecruiterJobs = () => {
  useEffect(() => {
    const zipRecruiterScript = document.createElement('script');

    zipRecruiterScript.src =
      'https://www.ziprecruiter.com/jobs-widget/pro/v2/63bjfya4arc58ywaxtvi8jkchvzymeep';

    document.body.append(zipRecruiterScript);

    const initializeZipRecruiter = (zipsearch: ZipSearch) => {
      const options: ZipSearchOptions = {
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
