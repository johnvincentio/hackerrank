
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it.only('1', () => {
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
});
