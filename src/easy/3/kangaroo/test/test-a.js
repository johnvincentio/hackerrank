//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = ['0 3 4 2']; // x1, v1, x2, v2
		const result = a.main(input);
		result.should.equal('YES');
	});

	it('2', () => {
		const input = ['0 2 5 3']; // x1, v1, x2, v2
		const result = a.main(input);
		result.should.equal('NO');
	});

	it('3', () => {
		const input = ['0 2 5 2']; // x1, v1, x2, v2
		const result = a.main(input);
		result.should.equal('NO');
	});
});
