//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

/*
	it('1', () => {
		const input = [
			'9', // number of games
			'10 5 20 20 4 5 2 25 1' // integers describing the respective scores
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(2);
		result[1].should.equal(4);
	});
*/

describe('test', () => {
	it('1', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'4', //
			'5 25 50 120'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(4);
		result[0].should.equal(6);
		result[1].should.equal(4);
		result[2].should.equal(2);
		result[3].should.equal(1);
	});

	it('2', () => {
		const input = [
			'6', //
			'100 90 90 80 75 60', //
			'5', //
			'50 65 77 90 102'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(5);
		result[0].should.equal(6);
		result[1].should.equal(5);
		result[2].should.equal(4);
		result[3].should.equal(2);
		result[4].should.equal(1);
	});

	it('3a', () => {
		const input = [
			'1', //
			'60', //
			'1', //
			'50'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(2);
	});

	it('3b', () => {
		const input = [
			'1', //
			'60', //
			'1', //
			'60'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(1);
	});

	it('3c', () => {
		const input = [
			'1', //
			'60', //
			'1', //
			'61'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(1);
	});

	it('3d', () => {
		const input = [
			'1', //
			'0', //
			'1', //
			'1'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(1);
	});

	it('3e', () => {
		const input = [
			'1', //
			'0', //
			'1', //
			'0'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(1);
	});

	it('3f', () => {
		const input = [
			'1', //
			'0', //
			'1', //
			'1'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(1);
	});

	it('4a', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'2', //
			'5 5'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(6);
		result[1].should.equal(6);
	});

	it('4b', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'2', //
			'35 35'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(4);
		result[1].should.equal(4);
	});

	it('4c', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'2', //
			'35 35 35'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(3);
		result[0].should.equal(4);
		result[1].should.equal(4);
		result[2].should.equal(4);
	});

	it('4d', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'2', //
			'35 35 36 38'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(4);
		result[0].should.equal(4);
		result[1].should.equal(4);
		result[2].should.equal(4);
		result[3].should.equal(4);
	});

	it('4e', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'2', //
			'35 38'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(4);
		result[1].should.equal(4);
	});

	it('5a', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'2', //
			'50 120'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(2);
		result[1].should.equal(1);
	});

	it('5b', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'1', //
			'50'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(2);
	});

	it('5c', () => {
		const input = [
			'7', //
			'100 100 50 40 40 20 10', //
			'1', //
			'120'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(1);
	});
});

describe('test', () => {
	it('1', () => {
		const input = [
			'1', //
			'10', //
			'1', //
			'5'
		];

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(2);
	});
});
