import { wait } from '@testing-library/react';

/**
 * @description Used to rerender after asynchronous things (Formik forms in particular)
 * @see /components/LoginForm/LoginForm.js for example usage
 * @exports
 * @param {Object.<string, any>} enzymeWrapper
 */
const asyncRenderDiff = async enzymeWrapper => {
  await wait();
  enzymeWrapper.update();
};

export default asyncRenderDiff;
