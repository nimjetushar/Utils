import { isEmptyObject } from '../build';

describe('isEmpty', () => {
  it('should check for empty object', () => {
    expect(isEmptyObject({})).toBeTruthy();

    expect(isEmptyObject({ it: 'it' })).toBeFalsy();
  });
});
