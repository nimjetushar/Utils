import { noop } from '../core/noop';

describe('test noop', () => {
    it('should return nothing', () => {
        expect(noop).toBeDefined();

        expect(noop()).not.toBeDefined();
    });
});
