
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'6 4',
			'give me one grand today night',
			'give one grand today'
		];
		const result = a.main(input);
		result.should.equal('Yes');
	});

	it('2', () => {
		const input = [
			'6 5',
			'two times three is not four',
			'two times two is four'
		];
		const result = a.main(input);
		result.should.equal('No');
	});

	it('3', () => {
		const input = [
			'7 4',
			'ive got a lovely bunch of coconuts',
			'ive got some coconuts'
		];
		const result = a.main(input);
		result.should.equal('No');
	});
});
