//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'6', //
			'7 1 3 4 1 7' //
		];
		const result = a.main(input);
		result.should.equal(3);
	});
});
