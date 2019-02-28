
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'8 5',
			'2 3 1 2 3 2 3 3',
			'0 3',
			'4 6',
			'6 7',
			'3 5',
			'0 7'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(5);
		result[0].should.equal(1);
		result[1].should.equal(2);
		result[2].should.equal(3);
		result[3].should.equal(2);
		result[4].should.equal(1);
	});
});
