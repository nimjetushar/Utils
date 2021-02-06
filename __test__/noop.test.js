import { noop } from '../build/utils';

describe('test noop', () => {
    it('should return nothing', () => {
        expect(noop).toBeDefined();

        expect(noop()).not.toBeDefined();
    });
});
