import React from 'react';
import { mount } from 'enzyme';
import { createMemoryHistory } from 'history';
import SocialLogin from '../SocialLogin';

describe('SocialLogin', () => {
  it('should render with just required props passed', () => {
    const sendNotificationMock = jest.fn();
    const history = createMemoryHistory('/');
    mount(<SocialLogin history={history} sendNotification={sendNotificationMock} />);
  });
});
