//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('07:05:45AM', () => {
		a.main(['07:05:45AM']).should.equal('07:05:45');
	});
	it('07:05:45PM', () => {
		a.main(['07:05:45PM']).should.equal('19:05:45');
	});
	it('12:00:00AM', () => {
		a.main(['12:00:00AM']).should.equal('00:00:00');
	});
	it('12:00:00PM', () => {
		a.main(['12:00:00PM']).should.equal('12:00:00');
	});
});
