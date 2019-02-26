//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const input = [
			'4 9 2', // Each of the lines contains three space-separated integers of row s[i]
			'3 5 7', //
			'8 1 5' //
		];
		/*
s[2][2], 5 -> 6, cost = [6 - 5] = 1

4 9 2
3 5 7
8 1 6
*/
		const result = a.main(input);
		result.should.equal(1);
	});

	it('2', () => {
		const input = [
			'5 3 4', // Each of the lines contains three space-separated integers of row s[i]
			'1 5 8', //
			'6 4 2' //
		];
		/*
s[0][0] 5 -> 8, [5 - 8] = 3
s[1][2] 8 -> 9, [8 - 9] = 1
s[2][1] 4 -> 7, [4 - 7] = 3
cost = 7

8 3 4
1 5 9
6 7 2
*/
		const result = a.main(input);
		result.should.equal(7);
	});

	it('3', () => {
		const input = [
			'4 8 2', // Each of the lines contains three space-separated integers of row s[i]
			'4 5 7', //
			'6 1 6' //
		];
		/*
s[0][1] -> 9, [9 - 8] = 1
s[1][0] -> 3, [3 - 4] = 1
s[2][0] -> 8, [8 - 6] = 2
cost = 4

4 9 2
3 5 7
8 1 6
*/
		const result = a.main(input);
		result.should.equal(4);
	});
});

describe.skip('magic squares', () => {
	it('create', () => {
		const result = a.create();
		result.should.be.a('array');
		result.length.should.equal(8);
		// result[0].should.equal(75);
		// result[1].should.equal(67);
		// result[2].should.equal(40);
		// result[3].should.equal(33);
	});
});
