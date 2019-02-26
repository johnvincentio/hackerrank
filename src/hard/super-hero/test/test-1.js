//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test-1', () => {
	it('1', () => {
		const input = [
			'1', // test cases

			'2 3', // number of levels, number of enemies at each level

			'3 2 1', // Power of enemy, at the level zero
			'4 5 6',

			'1 2 3', // Bullets of enemy, at the level zero
			'7 8 9'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(2);
	});

	it('2', () => {
		const input = [
			'2', // test cases

			'3 3', // number of levels, number of enemies at each level

			'3 2 1', // Power of enemy, at the level zero
			'1 2 3',
			'3 2 1',

			'1 2 3', // Bullets of enemy, at the level zero
			'3 2 1',
			'1 2 3',

			'3 3',

			'3 2 5',
			'8 9 1',
			'4 7 6',

			'1 1 1',
			'1 1 1',
			'1 1 1'
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(2);
		result[0].should.equal(1);
		result[1].should.equal(5);
	});

	it('3a', () => {
		const input = [
			'1', // test cases

			'1 1', // number of levels, number of enemies at each level

			'3', // Power of enemy, at the level zero

			'1' // Bullets of enemy, at the level zero
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(3);
	});

	it('3b', () => {
		const input = [
			'1', // test cases

			'1 1', // number of levels, number of enemies at each level

			'1', // Power of enemy, at the level zero

			'1' // Bullets of enemy, at the level zero
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(1);
	});

	it('3c', () => {
		const input = [
			'1', // test cases

			'1 1', // number of levels, number of enemies at each level

			'1', // Power of enemy, at the level zero

			'5' // Bullets of enemy, at the level zero
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(1);
	});
});
