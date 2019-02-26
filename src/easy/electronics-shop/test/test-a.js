//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'10 2 3', // budget, number of keyboard models, number of usb drives models
			'3 1', //	prices of each keyboard model
			'5 2 8' // prices of each usb drive model
		];
		const result = a.main(input);
		result.should.equal(9);
	});

	it('2', () => {
		const input = [
			'5 1 1', //
			'4', //
			'5' //
		];
		const result = a.main(input);
		result.should.equal(-1);
	});
});
