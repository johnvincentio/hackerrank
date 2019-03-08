/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'1 1 1 0 0 0',
			'0 1 0 0 0 0',
			'1 1 1 0 0 0',
			'0 0 2 4 4 0',
			'0 0 0 2 0 0',
			'0 0 1 2 4 0'
		];
		const result = a.main(input);
		result.should.equal(19);
	});
});


