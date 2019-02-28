
/* global describe, it, before */

/*
https://hr-testcases-us-east-1.s3.amazonaws.com/28833/input18.txt?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1551338700&Signature=2erBTjqfUg%2BPMOkAmt0YE3BoAak%3D&response-content-type=text%2Fplain

test case 17
*/

const fs = require('fs');
const should = require('chai').should();

const a = require('../a');

const ide = false;	// true if using Visual Studio Code debugger
const name = ide ? './src/medium/queen-attack-2/test/testcase-17/input.txt' :
	'./test/testcase-17/input.txt';

let inputString = null;

describe('testcase-17', () => {
	before(() => {
		const alpha = fs.readFileSync(name).toString();
		inputString = alpha
			.trim()
			.split('\n')
			.map(str => str.trim());
	});

	it('1', () => {
		const result = a.main(inputString);
		result.should.equal(110198);
	});
});

