//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'2017' //
		];
		const result = a.main(input);
		result.should.equal('13.09.2017');
	});

	it('2', () => {
		const input = [
			'2016' //
		];
		const result = a.main(input);
		result.should.equal('12.09.2016');
	});

	it('3', () => {
		const input = [
			'1984' //
		];
		const result = a.main(input);
		result.should.equal('12.09.1984');
	});

	it('4', () => {
		const input = [
			'1800' //
		];
		const result = a.main(input);
		result.should.equal('12.09.1800'); // Since 1800 is leap year. Day lies on 12 September
	});

	it('5', () => {
		const input = [
			'1918' //
		];
		const result = a.main(input);
		result.should.equal('26.09.1918'); // Since 1800 is leap year. Day lies on 12 September
	});
});
