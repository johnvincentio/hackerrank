//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'1', // size of the array
			'1' // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('1');
	});

	it('2', () => {
		const input = [
			'1', // size of the array
			'7' // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('1');
	});

	it('3', () => {
		const input = [
			'1', // size of the array
			'22' // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('0');
	});

	it('4', () => {
		const input = [
			'3', // size of the array
			'1 7 22' // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(3);
		result[0].should.equal('1');
		result[1].should.equal('1');
		result[2].should.equal('0');
	});
});
