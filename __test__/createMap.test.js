import { createMap } from '../build/utils';

describe('createMap', () => {
  it('should check for undefined', () => {
    expect(() => {
      createMap();
    }).toThrow();
  });

  it('should check for data type other than array', () => {
    expect(() => {
      createMap({});
    }).toThrow();

    expect(() => {
      createMap(2);
    }).toThrow();

    expect(() => {
      createMap('demo');
    }).toThrow();
  });

  it('should create map for array', () => {
    const data = createMap(['demo1', 'demo2']);

    expect(data[0]).toBe('demo1');
    expect(data[1]).toBe('demo2');

    const obj = createMap(
      [{ key: '123', name: 'name1' }, { key: '1231', name: 'name2' }],
      'key'
    );

    expect(obj['123']).toStrictEqual({ key: '123', name: 'name1' });
  });
});
