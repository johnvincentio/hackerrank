//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'6', // size of the array
			'4 6 5 3 3 1' // integers a[i]
		];
		const result = a.main(input);
		result.should.equal(3);
	});

	it('2', () => {
		const input = [
			'6', // size of the array
			'1 2 2 3 1 2' // integers a[i]
		];
		const result = a.main(input);
		result.should.equal(5);
	});
});
