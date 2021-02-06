import { isEmptyObject } from '../build/utils';

describe('isEmpty', () => {
  it('should check for empty object', () => {
    expect(isEmptyObject({})).toBeTruthy();

    expect(isEmptyObject({ it: 'it' })).toBeFalsy();
  });
});
