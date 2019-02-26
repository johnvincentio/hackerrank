//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'9', // number of games
			'10 5 20 20 4 5 2 25 1' // integers describing the respective scores
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(2);
		result[1].should.equal(4);
	});

	it('2', () => {
		const input = [
			'10', // number of games
			'3 4 21 36 10 28 35 5 24 42' // integers describing the respective scores
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(4);
		result[1].should.equal(0);
	});
});
