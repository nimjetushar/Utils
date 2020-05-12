import { sort } from '../core/multiSort';

const list = [
    { name: 'z - test item', price: '99.99', priority: 0, reviews: 309, rating: 2 },
    { name: 'z - test item', price: '1.99', priority: 0, reviews: 11, rating: 0.5 },
    { name: 'y - test item', price: '99.99', priority: 1, reviews: 99, rating: 1 },
    { name: 'y - test item', price: '0', priority: 1, reviews: 394, rating: 3.5 },
    { name: 'x - test item', price: '0', priority: 2, reviews: 249, rating: 0.5 }
];

describe('sort list with multiple parameters', () => {
    it('should sort with respect to field', () => {
        let sortedList = sort(list, ['reviews']);
        expect(sortedList[0].reviews).toEqual(11);
        expect(sortedList[1].reviews).toEqual(99);

        sortedList = sort(list, ['+reviews']);
        expect(sortedList[0].reviews).toEqual(11);

        sortedList = sort(list, ['-reviews']);
        expect(sortedList[0].reviews).toEqual(394);
        expect(sortedList[1].reviews).toEqual(309);
    });

    it('should sort with respect to multiple field', () => {
        let sortedList = sort(list, ['reviews', 'price']);
        expect(sortedList[0].reviews).toEqual(11);
        expect(sortedList[0].price).toEqual('1.99');

        sortedList = sort(list, ['price', 'reviews']);
        expect(sortedList[0].reviews).toEqual(249);
        expect(sortedList[0].price).toEqual('0');
    });
});
