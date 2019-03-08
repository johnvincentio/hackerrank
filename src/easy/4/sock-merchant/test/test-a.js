//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'9', // number of socks represented in ar
			'10 20 20 10 10 30 50 10 20' // integers describing the colors ar[i] of the socks in the pile.
		];
		const result = a.main(input);
		result.should.equal(3);
	});

	it('2', () => {
		const input = [
			'7', // number of socks represented in ar
			'1 2 1 2 1 3 2' // integers describing the colors ar[i] of the socks in the pile.
		];
		const result = a.main(input);
		result.should.equal(2);
	});
});
