//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'5', // number of pages in the book
			'4' // page that Brie's teacher wants her to turn to
		];
		const result = a.main(input);
		result.should.equal(0);
	});

	it('2', () => {
		const input = [
			'6', //
			'2' //
		];
		const result = a.main(input);
		result.should.equal(1);
	});

	it.only('3', () => {
		const input = [
			'6', //
			'1' //
		];
		const result = a.main(input);
		result.should.equal(0);
	});

	it('4', () => {
		const input = [
			'6', //
			'6' //
		];
		const result = a.main(input);
		result.should.equal(0);
	});

	it('5', () => {
		const input = [
			'6', //
			'5' //
		];
		const result = a.main(input);
		result.should.equal(1);
	});
});
