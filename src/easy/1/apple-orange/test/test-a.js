//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'7 11', // starting point of Sam's house, ending point of Sam's house
			'5 15', // location of the Apple tree, location of the Orange tree
			'3 2', // number of apples, number of oranges
			'-2 2 1', // distance apples fall from point a
			'5 -6' // distance oranges fall from point b
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(1);
		result[1].should.equal(1);
	});
});
