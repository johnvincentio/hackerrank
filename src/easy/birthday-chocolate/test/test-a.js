//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'5', // number of squares in the chocolate bar
			'1 2 1 3 2', // numbers on the chocolate squares
			'3 2' // birth day, birth month
		];
		const result = a.main(input);
		result.should.equal(2);
	});

	it('2', () => {
		const input = [
			'5', // number of squares in the chocolate bar
			'2 2 1 3 2', // numbers on the chocolate squares
			'4 2' // birth day, birth month
		];
		const result = a.main(input);
		result.should.equal(2); // [2,2] [1,3]
	});
});
