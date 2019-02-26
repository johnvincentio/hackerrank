//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it("'4', '3 2 1 3'", () => {
		const result = a.main(['4', '3 2 1 3']);
		console.log('result ', result);
		result.should.equal(2);
		// a.main(['4', '3 2 1 3']).should.equal('10 14');
	});

	it("'5', '6 3 2 1 3'", () => {
		a.main(['5', '6 3 2 1 3']).should.equal(1);
	});

	it("'6', '6 3 2 5 3 1'", () => {
		a.main(['6', '6 3 2 5 6 1']).should.equal(2);
	});
});
