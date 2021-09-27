import { isArray } from '../build';

describe('isArray', () => {
  it('should return a function', () => {
    expect(isArray).toBeDefined();

    const type = typeof isArray;
    expect(type).toBe('function');
  });

  it('should identify passed variable is array or not', () => {
    let isDtArray = isArray([]);
    expect(isDtArray).toBeTruthy();

    isDtArray = isArray([1, 2, 'it']);
    expect(isDtArray).toBeTruthy();

    isDtArray = isArray({ it: 'it' });
    expect(isDtArray).toBeFalsy();

    isDtArray = isArray(1);
    expect(isDtArray).toBeFalsy();

    isDtArray = isArray('it string');
    expect(isDtArray).toBeFalsy();

    isDtArray = isArray(new Date());
    expect(isDtArray).toBeFalsy();
  });
});
