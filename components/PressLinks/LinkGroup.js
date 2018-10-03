import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './PressLinks.css';
import OutboundLink from '../_common_/OutboundLink/OutboundLink';
import Button from '../_common_/Button/Button';

class LinkGroup extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    links: PropTypes.arrayOf(
      PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    ).isRequired,
    MaxLinks: PropTypes.number.isRequired,
  };

  state = {
    ShowAll: false,
  };

  clickHandler = () => {
    const { ShowAll } = this.state;
    this.setState({ ShowAll: !ShowAll });
  };

  render() {
    const { ShowAll } = this.state;
    const { title, links, MaxLinks } = this.props;
    return (
      <div className={styles.articlesGroup}>
        <h2>{title}</h2>
        <ul>
          {links.map((link, index) => {
            if (index >= MaxLinks && !ShowAll) {
              return null;
            }
            return (
              <li key={`GroupLink_${link.url}`}>
                <OutboundLink href={link.url}>{link.title}</OutboundLink>
              </li>
            );
          })}
        </ul>
        {links.length > MaxLinks && (
          <Button
            aria-pressed={ShowAll} // this needs to be passed and accepted by the button component
            className={styles.ShowAllButton}
            theme={ShowAll ? 'slate' : 'primary'}
            onClick={this.clickHandler}
          >
            {ShowAll ? 'Show Less' : 'Show All'}
          </Button>
        )}
      </div>
    );
  }
}

export default LinkGroup;
