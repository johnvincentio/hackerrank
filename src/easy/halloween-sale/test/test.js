/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test1', () => {
	it('1', () => {
		const input = [
			'20 3 6 80'
		];
		const result = a.main(input);
		result.should.equal(6);
	});
});

describe('test2', () => {
	it('1', () => {
		const input = [
			'20 3 6 19'
		];
		const result = a.main(input);
		result.should.equal(0);
	});
	it('2', () => {
		const input = [
			'20 3 6 20'
		];
		const result = a.main(input);
		result.should.equal(1);
	});
});
