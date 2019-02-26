//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'2 3', // n = number of elements in a, m = = number of elements in b
			'2 4', // n distinct integers in a
			'16 32 96' // m distinct integers in b
		];
		const result = a.main(input);
		result.should.equal(3); // 4, 8, 16
	});

	it('2', () => {
		const input = [
			'2 2', // n = number of elements in a, m = = number of elements in b
			'2 6', // n distinct integers in a
			'24 36' // m distinct integers in b
		];
		const result = a.main(input);
		result.should.equal(2); // 6, 12
	});
});
