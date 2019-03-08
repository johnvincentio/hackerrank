//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = ['4', '73', '67', '38', '33'];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(4);
		result[0].should.equal(75);
		result[1].should.equal(67);
		result[2].should.equal(40);
		result[3].should.equal(33);
	});

	it('2', () => {
		const input = ['7', '100', '95', '94', '93', '92', '91', '90'];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(7);
		result[0].should.equal(100);
		result[1].should.equal(95);
		result[2].should.equal(95);
		result[3].should.equal(95);
		result[4].should.equal(92);
		result[5].should.equal(91);
		result[6].should.equal(90);
	});
});
