
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'5',
			'2 3 4 1 5'
		];
		const result = a.main(input);
		result.should.equal(3);
	});

	it('2', () => {
		const input = [
			'7',
			'1 3 5 2 4 6 7'
		];
		const result = a.main(input);
		result.should.equal(3);
	});

	it('3', () => {
		const input = [
			'6',
			'3 5 6 2 4 1'
		];
		const result = a.main(input);
		result.should.equal(4);
	});

});