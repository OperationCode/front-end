import { getServerErrorMessage } from '@/lib/utils/api-utils';
import { networkErrorMessages } from '@/lib/constants/messages';

describe('API Utilities', () => {
  describe('getServerErrorMessage', () => {
    it('returns server down if not passed an object', () => {
      expect(getServerErrorMessage(undefined)).toStrictEqual(networkErrorMessages.serverDown);
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
