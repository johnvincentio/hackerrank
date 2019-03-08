
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'5',
			'ab',
			'bb',
			'hefg',
			'dhck',
			'dkhc'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(5);
		result[0].should.equal('ba');
		result[1].should.equal('no answer');
		result[2].should.equal('hegf');
		result[3].should.equal('dhkc');
		result[4].should.equal('hcdk');
	});

	it('2', () => {
		const input = [
			'6',
			'lmno',
			'dcba',
			'dcbb',
			'abdc',
			'abcd',
			'fedcbabcd'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(6);
		result[0].should.equal('lmon');
		result[1].should.equal('no answer');
		result[2].should.equal('no answer');
		result[3].should.equal('acbd');
		result[4].should.equal('abdc');
		result[5].should.equal('fedcbabdc');
	});

	it('3', () => {
		const input = [
			'1',
			'ab'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('ba');
	});

	it('4', () => {
		const input = [
			'1',
			'bb'
		];
		const result = a.main(input);
		console.log('in 4; result ', result);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('no answer');
	});

	it('5', () => {
		const input = [
			'1',
			'dkhc'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('hcdk');
	});

	it('6', () => {
		const input = [
			'1',
			'dbha'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('dhab');
	});

	it('7', () => {
		const input = [
			'1',
			'hdef'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('hdfe');
	});

	it('8', () => {
		const input = [
			'1',
			'gkjepmf'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('gkjfemp');
	});

	it('9', () => {
		const input = [
			'1',
			'g'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('no answer');
	});

	it('10', () => {
		const input = [
			'1',
			'jqczvgqywydkunmjw'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal('jqczvgqywydkunmwj');
	});

	it('11', () => {
		const input = [
			'1',
			'ehdegnmorgafrjxvksc'
		];
		const answer = 'ehdegnmorgafrjxvsck';
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		// console.log('input[1]  ', input[1]);
		// console.log('answer    ', answer);
		// console.log('result[0] ', result[0]);
		result[0].should.equal(answer);
	});

	it('12', () => {
		const input = [
			'1',
			'wksc'
		];
		const answer = 'wsck';
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(answer);
	});

	it('13', () => {
		const input = [
			'1',
			'aksc'
		];
		const answer = 'asck';
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(answer);
	});
});
