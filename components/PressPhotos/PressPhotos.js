import React from 'react';
import styles from './PressPhotos.css';

function PressPhotos() {
  return (
    <div className={styles.photos}>
      <img
        src="/static/images/CodeConferenceLA.jpg"
        alt="David Molina speaks to Code Conference LA 2016 attendees."
      />
      <img
        src="/static/images/RedHat-Summit.jpg"
        alt="Operation Code members pose at Red Hat Summit 2017"
      />
      <img
        src="/static/images/Node-Summit.jpg"
        alt="Conrad Hollomon presents in front of the Node Summit 2016 audience."
      />
      <img
        src="/static/images/AngelHack-Boston.jpg"
        alt="Operation Code developers pose at AngelHack Boston 2017."
      />
      <img
        src="/static/images/Utah-Meetup.jpg"
        alt="Ken Collier leads a discussion at the Utah Operation Code meetup."
      />
    </div>
  );
}

export default PressPhotos;
