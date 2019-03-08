//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'8', //
			'1 2 3 4 3 3 2 1' //
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(4);
		result[0].should.equal(8);
		result[1].should.equal(6);
		result[2].should.equal(4);
		result[3].should.equal(1);
	});

	it('2', () => {
		const input = [
			'6', //
			'5 4 4 2 2 8' //
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(4);
		result[0].should.equal(6);
		result[1].should.equal(4);
		result[2].should.equal(2);
		result[3].should.equal(1);
	});

	it('3', () => {
		const input = [
			'5', //
			'1 4 4 6 12' //
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(4);
		result[0].should.equal(5);
		result[1].should.equal(4);
		result[2].should.equal(2);
		result[3].should.equal(1);
	});
});
