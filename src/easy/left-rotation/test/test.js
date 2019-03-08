/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it.only('1', () => {
		const input = [
			'5 4',
			'1 2 3 4 5'
		];
		const result = a.main(input);
		result.should.equal('5 1 2 3 4');
	});

	it('2', () => {
		const input = [
			'5 2',
			'1 2 3 4 5'
		];
		const result = a.main(input);
		result.should.equal('3 4 5 1 2');
	});

});


