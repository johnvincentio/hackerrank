//

/* eslint-disable no-plusplus */

/* global describe, it */

const fs = require('fs');
const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		// prettier-ignore
		const input = [
			'8',
			'1',
			'2',
			'100',
			'12303479849857341718340192371',
			'3084193741082937',
			'3084193741082938',
			'111',
			'200'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(8);
		result[0].should.equal('1');
		result[1].should.equal('2');
		result[2].should.equal('100');
		result[3].should.equal('111');
		result[4].should.equal('200');
		result[5].should.equal('3084193741082937');
		result[6].should.equal('3084193741082938');
		result[7].should.equal('12303479849857341718340192371');
	});

	it.only('2', () => {
		// prettier-ignore
		const input = [
			'6',
			'31415926535897932384626433832795',
			'1',
			'3',
			'10',
			'3',
			'5'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(6);
		result[0].should.equal('1');
		result[1].should.equal('3');
		result[2].should.equal('3');
		result[3].should.equal('5');
		result[4].should.equal('10');
		result[5].should.equal('31415926535897932384626433832795');
	});

	it('3', () => {
		const alpha = fs.readFileSync('./src/easy/big-sorting/test/input-2.txt').toString();
		const input = alpha
			.trim()
			.split('\n')
			.map(str => str.trim());
		const beta = fs.readFileSync('./src/easy/big-sorting/test/output-2.txt').toString();
		const output = beta
			.trim()
			.split('\n')
			.map(str => str.trim());

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(output.length);
		for (let i = 0; i < result.length; i++) {
			// console.log('i ', i, ' result[i] ', result[i], ' output[i] ', output[i]);
			// if (result[i] !== output[i]) break;
			result[i].should.equal(output[i]);
		}
	});

	it('4', () => {
		const alpha = fs.readFileSync('./src/easy/big-sorting/test/input-a.txt').toString();
		const input = alpha
			.trim()
			.split('\n')
			.map(str => str.trim());
		const beta = fs.readFileSync('./src/easy/big-sorting/test/output-a.txt').toString();
		const output = beta
			.trim()
			.split('\n')
			.map(str => str.trim());

		console.error('before');
		console.error(output);
		console.error('after');

		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1 * output[0]);
		for (let i = 0; i < result.length; i++) {
			result[i].should.equal(output[i + 1]);
		}
	});
});
