import { isBoolean } from '../build/utils';

describe('isBoolean', () => {
  it('should check for boolean true/false', () => {
    expect(isBoolean(true)).toBe(true);

    expect(isBoolean(false)).toBe(true);

    expect(isBoolean('false')).toBe(false);
  });
});
