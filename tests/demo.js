'use strict';

function isEven(n) {
    return n % 2 == 0;
}

describe('demo-tests', function() {
    it('should be equal to true', function() {
        expect(true).to.be.true;
    });
    it('1 should equal 1', function() {
        expect(1).to.equal(1);
        expect(2).not.to.equal(1);
    });
    it('1 should be greater than zero', function() {
        expect(1).to.be.greaterThan(0);
    });
    it('2 is even', function() {
        expect(isEven(2)).to.be.true;
        expect(isEven(2)).to.equal(true);
    });
});