import { noop } from '../build';

describe('test noop', () => {
    it('should return nothing', () => {
        expect(noop).toBeDefined();

        expect(noop()).not.toBeDefined();
    });
});
