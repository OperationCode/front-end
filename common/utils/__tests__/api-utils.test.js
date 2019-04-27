import { getErrorMessage } from 'common/utils/api-utils';
import { serverDownErrorMessage } from 'common/constants/api';

describe('API Utilities', () => {
  describe('getErrorMessage', () => {
    it('returns server down if not passed an object', () => {
      expect(getErrorMessage()).toStrictEqual(serverDownErrorMessage);
    });

    it('returns server down if not passed an object with an expected shape', () => {
      expect(getErrorMessage({})).toStrictEqual(serverDownErrorMessage);
    });

    it('returns the passed error message from an expected server error object', () => {
      const fakeTestMessage = 'Yoooooo!';
      expect(getErrorMessage({ response: { data: { error: fakeTestMessage } } })).toStrictEqual(
        fakeTestMessage,
      );
    });
  });
});
