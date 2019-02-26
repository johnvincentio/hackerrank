/* global describe, it */

const fs = require('fs');
const should = require('chai').should();

const alpha = fs.readFileSync('./src/1/8/test/testcase-17/input-1.txt').toString();
const inputString = alpha
	.trim()
	.split('\n')
	.map(str => str.trim());
// console.error('alpha ', alpha);

const a = require('../../a');

describe('test-data-1', () => {
	it('1', () => {
		const result = a.main(inputString);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(801);
	});
});

/*
1410
1609
1309
1002
202
1006
603
402
808
1105
*/
