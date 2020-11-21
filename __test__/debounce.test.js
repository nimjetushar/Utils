import { debounce } from '../core/debounce';

describe('debounce', () => {
    it('should be defined', () => {
        expect(debounce).toBeDefined();
    });

    it('should trigger after specified timeout', () => {
        jest.useFakeTimers();
        let count = 0;
        const func = debounce(() => {
            count++;
        }, 100);

        func();
        func();
        func();
        func();

        jest.runAllTimers();
        expect(count).toStrictEqual(1);
    });
});
