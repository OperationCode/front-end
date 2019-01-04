import PropTypes from 'prop-types';

/*
 * When declaring a new, commonly utilized prop type, please also export an object that can be used
 * by the Knobs Storybook addon easily. See Button's default story with analyticsObject for example.
 * NOTE: Export it as a function so that the object isn't mutable across multiple stories.
 */

/* eslint-disable import/prefer-default-export */
// See: https://github.com/react-ga/react-ga#reactgaeventargs for reference
export const googleAnalyticsEventPropType = PropTypes.shape({
  // A description of the behaviour. E.g. 'Clicked Delete', 'Added a component', 'Deleted account'
  action: PropTypes.string.isRequired,

  // A top level category for these events. E.g. 'User', 'Navigation', 'App Editing', etc.
  category: PropTypes.string.isRequired,

  // More precise labelling of the related action. E.g. alongside the 'Added a component' action,
  // we could add the name of a component as the label. E.g. 'Survey', 'Heading', 'Button', etc.
  label: PropTypes.string,

  // A means of recording a numerical value against an event. E.g. a rating, a score, etc.
  value: PropTypes.number,

  // If an event is not triggered by a user interaction, but instead by our code (e.g. on page
  // load, it should be flagged as a nonInteraction event to avoid skewing bounce rate data.
  nonInteraction: PropTypes.boolean,

  // This specifies the transport mechanism with which hits will be sent. Valid values include
  // 'beacon', 'xhr', or 'image'.
  transport: PropTypes.oneOf(['beacon', 'xhr', 'image']),
});

export const googleAnalyticsEventStoryObjectFactory = () => ({
  action: '',
  category: '',
  label: '',
  value: undefined,
  nonInteraction: false,
  transport: undefined,
});
