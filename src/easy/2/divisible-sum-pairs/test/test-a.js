//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'6 3', // integers n and k
			'1 3 2 6 1 2' // integers describing the values of ar[n], where n = [0, n-1]
		];
		const result = a.main(input);
		result.should.equal(5);
	});
});
