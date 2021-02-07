const expect = require('chai').expect;
const R = require('../fubanaci');

describe('Testing my Fibanacci program', function () {

    let findNthFibonacci = R;

    // //Test first value.
    describe('when index is 0', () => {
        it('should return 1', () => {
            expect(findNthFibonacci(0)).equal(1);
        });
    });

    describe('when index is 1', () => {
        it('should return 1', () => {
            expect(findNthFibonacci(1)).equal(1);
        });
    });


    describe('when index is 6', () => {
        it('should return 13', () => {
            expect(findNthFibonacci(6)).equal(13);
        });

        describe('when index is negative', () => {
            it('should return 0', () => {
                expect(findNthFibonacci(-1)).equal(0);
            });
        });




    });



    // it('should throw an error when n is a negative number', () => {
    //     expect(() => getNthFibonacci(-3)).toThrowError('n cannot be 0 or a negative number');
    // });

})