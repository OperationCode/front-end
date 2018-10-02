import React, { Component } from 'react';

export default class ZipRecruiterJobs extends Component {
  componentDidMount() {
    const zipRecruiterScript = document.createElement('script');

    zipRecruiterScript.src =
      'https://www.ziprecruiter.com/jobs-widget/pro/v2/63bjfya4arc58ywaxtvi8jkchvzymeep';

    document.body.appendChild(zipRecruiterScript);

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
  }

  render() {
    return <div id="zipsearch_container" />;
  }
}
