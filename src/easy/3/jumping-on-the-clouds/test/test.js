
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'7',
			'0 0 1 0 0 1 0'
		];
		const result = a.main(input);
		result.should.equal(4);
	});

	it('2', () => {
		const input = [
			'6',
			'0 0 0 0 1 0'
		];
		const result = a.main(input);
		result.should.equal(3);
	});
});