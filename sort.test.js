const sort = require('./sort');

describe('Sorting Small Arrays', () => {
    test('five single digit sort', ()=>{
        const input = [ 4, 3, 9, 2, 8 ];
        const expected = [ 2, 3, 4, 8, 9 ];
        const results = sort(input);
        expect(results).toEqual(expected);
    });
    // You should have at least 12 test cases for your Algorithm
});