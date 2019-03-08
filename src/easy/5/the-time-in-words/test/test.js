
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test1', () => {
	it('5:47', () => {
		const input = [
			'5',
			'47'
		];
		const result = a.main(input);
		result.should.equal('thirteen minutes to six');
	});
});

describe('test2', () => {
	it('3:00', () => {
		const input = [
			'3',
			'00'
		];
		const result = a.main(input);
		result.should.equal('three o\' clock');
	});
});

describe('test3', () => {
	it('7:15', () => {
		const input = [
			'7',
			'15'
		];
		const result = a.main(input);
		result.should.equal('quarter past seven');
	});
});

describe.only('test4', () => {
	it('5:00', () => {
		const input = [
			'5',
			'00'
		];
		const result = a.main(input);
		result.should.equal('five o\' clock');
	});
	it('5:01', () => {
		const input = [
			'5',
			'01'
		];
		const result = a.main(input);
		result.should.equal('one minute past five');
	});
	it('5:10', () => {
		const input = [
			'5',
			'10'
		];
		const result = a.main(input);
		result.should.equal('ten minutes past five');
	});
	it('5:15', () => {
		const input = [
			'5',
			'15'
		];
		const result = a.main(input);
		result.should.equal('quarter past five');
	});
	it('5:30', () => {
		const input = [
			'5',
			'30'
		];
		const result = a.main(input);
		result.should.equal('half past five');
	});
	it('5:40', () => {
		const input = [
			'5',
			'40'
		];
		const result = a.main(input);
		result.should.equal('twenty minutes to six');
	});
	it('5:45', () => {
		const input = [
			'5',
			'45'
		];
		const result = a.main(input);
		result.should.equal('quarter to six');
	});
	it('5:47', () => {
		const input = [
			'5',
			'47'
		];
		const result = a.main(input);
		result.should.equal('thirteen minutes to six');
	});
	it('5:28', () => {
		const input = [
			'5',
			'28'
		];
		const result = a.main(input);
		result.should.equal('twenty eight minutes past five');
	});
	it('5:59', () => {
		const input = [
			'5',
			'59'
		];
		const result = a.main(input);
		result.should.equal('one minute to six');
	});
});
