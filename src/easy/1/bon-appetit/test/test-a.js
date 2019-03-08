//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'4 1', // number of items ordered, zero based index of item Anna did not eat.
			'3 10 2 9', // bills
			'12' // money Brian charged Anna for her share
		];
		const result = a.main(input);
		result.should.equal(5);
	});

	it('2', () => {
		const input = [
			'4 1', //
			'3 10 2 9', //
			'7' //
		];
		const result = a.main(input);
		result.should.equal('Bon Appetit');
	});

	it('3', () => {
		const input = [
			'3 2', // did not eat [2]
			'2 4 6', // Anna will pay 6 / 2 = 3, total cost = 12 / 2 = 6
			'6' //
		];
		const result = a.main(input);
		result.should.equal(3);
	});
});
