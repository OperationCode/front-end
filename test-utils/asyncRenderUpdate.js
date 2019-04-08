import wait from './wait';

/**
 * Used to force a re-render of a very async component
 *
 * @param {EnzymeWrapper} enzymeWrapper
 * @param {number} [extraTimeMS=0] any extra time in milliseconds you'd like to wait
 */
async function asyncWrapperRender(enzymeWrapper, extraTimeMS = 0) {
  await wait(extraTimeMS);
  enzymeWrapper.update();
}

export default asyncWrapperRender;
