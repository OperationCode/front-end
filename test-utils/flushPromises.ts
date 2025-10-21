// Flush all promsises in a test so that Jest won't finish before they are handled
// Taken from: https://github.com/facebook/jest/issues/2157#issuecomment-279171856
const flushPromises = () => new Promise(resolve => setImmediate(resolve));

export default flushPromises;
