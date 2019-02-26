//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1 2 3 4 5', () => {
		// const result = a.main(['1 2 3 4 5']);
		// console.log('result ', result);
		// result.should.equal('10 14');
		a.main(['1 2 3 4 5']).should.equal('10 14');
	});

	it('1 3 5 7 9', () => {
		a.main(['1 3 5 7 9']).should.equal('16 24');
	});

	it('7 69 2 221 8974', () => {
		a.main(['7 69 2 221 8974']).should.equal('299 9271');
	});

	it('1 1 2 4 7', () => {
		a.main(['1 1 2 4 7']).should.equal('8 14');
	});

	it('7 1 2 1 7', () => {
		a.main(['7 1 2 1 7']).should.equal('11 17');
	});

	it('7 1 2 1 3', () => {
		a.main(['7 1 2 1 3']).should.equal('7 13');
	});

	it('7 7 7 7 7', () => {
		a.main(['7 7 7 7 7']).should.equal('28 28');
	});

	it('1 1 1 1 1', () => {
		a.main(['1 1 1 1 1']).should.equal('4 4');
	});

	it('769082435 210437958 673982045 375809214 380564127', () => {
		a.main(['769082435 210437958 673982045 375809214 380564127']).should.equal('1640793344 2199437821');
	});
});
