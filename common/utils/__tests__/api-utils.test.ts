import { getServerErrorMessage } from 'common/utils/api-utils';
import { networkErrorMessages } from 'common/constants/messages';

describe('API Utilities', () => {
  describe('getServerErrorMessage', () => {
    it('returns server down if not passed an object', () => {
      expect(getServerErrorMessage()).toStrictEqual(networkErrorMessages.serverDown);
    });

    it('returns server down if not passed an object with an expected shape', () => {
      expect(getServerErrorMessage({})).toStrictEqual(networkErrorMessages.serverDown);
    });

    it('returns the passed error message from an expected server error object', () => {
      const fakeTestMessage = 'Yoooooo!';
      expect(
        getServerErrorMessage({ response: { data: { error: fakeTestMessage } } }),
      ).toStrictEqual(fakeTestMessage);
    });
  });
});
