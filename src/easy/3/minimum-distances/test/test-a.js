//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test1', () => {
	it('1', () => {
		const input = [
			'6',
			'7 1 3 4 1 7'
		];
		const result = a.main(input);
		result.should.equal(3);
	});
});

describe('test2', () => {
	it('1', () => {
		const input = [
			'6',
			'7 1 3 4 5 6'
		];
		const result = a.main(input);
		result.should.equal(-1);
	});
	it('2', () => {
		const input = [
			'0',
			''
		];
		const result = a.main(input);
		result.should.equal(-1);
	});
});

describe('test3', () => {
	it('1', () => {
		const input = [
			'6',
			'7 1 3 7 1 7'
		];
		const result = a.main(input);
		result.should.equal(2);
	});
});
