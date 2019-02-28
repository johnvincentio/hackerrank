
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'4 0',
			'4 4'
		];
		const result = a.main(input);
		result.should.equal(9);
	});

	it.only('2', () => {
		const input = [
			'5 3',
			'4 3',
			'5 5',
			'4 2',
			'2 3'
		];
		const result = a.main(input);
		result.should.equal(10);
	});

	it('2', () => {
		const input = [
			'1 0',
			'1 1'
		];
		const result = a.main(input);
		result.should.equal(0);
	});
});
