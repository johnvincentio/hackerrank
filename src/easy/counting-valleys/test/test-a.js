//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'8', // size of the array
			'UDDDUDUU' // steps
		];
		const result = a.main(input);
		result.should.equal(1);
	});
});
