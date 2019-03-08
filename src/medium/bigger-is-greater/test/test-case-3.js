
/* global describe, it, before */

/*
https://hr-testcases-us-east-1.s3.amazonaws.com/4187/input03.txt?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1552006209&Signature=RDLwGz%2BOhzmhj6Ay9Thkb2h0D0w%3D&response-content-type=text%2Fplain
https://hr-testcases-us-east-1.s3.amazonaws.com/4187/output03.txt?AWSAccessKeyId=AKIAJ4WZFDFQTZRGO3QA&Expires=1552006388&Signature=YkL231PZoBl7iU9jpbU8PbLhhNk%3D&response-content-type=text%2Fplain

test case 3
*/

/* eslint-disable no-plusplus */

const fs = require('fs');
const should = require('chai').should();

const a = require('../a');

const ide = false;	// true if using Visual Studio Code debugger
const inputFilename = ide ?
	'./src/medium/bigger-is-greater/test/testcase-3/input.txt' :
	'./test/testcase-3/input.txt';
const outputFilename = ide ?
	'./src/medium/bigger-is-greater/test/testcase-3/output.txt' :
	'./test/testcase-3/output.txt';

let inputString = null;
let outputString = null;

describe('testcase-3', () => {
	before(() => {
		const alpha = fs.readFileSync(inputFilename).toString();
		inputString = alpha
			.trim()
			.split('\n')
			.map(str => str.trim());
		const beta = fs.readFileSync(outputFilename).toString();
		outputString = beta
			.trim()
			.split('\n')
			.map(str => str.trim());
	});

	it.only('1', () => {
		const result = a.main(inputString);
		result.should.be.a('array');
		result.length.should.equal(100);
		result.length.should.equal(outputString.length);
		// console.log('outputString.length ', outputString.length)
		for (let cnt = 0; cnt < outputString.length; cnt++) {
			result[cnt].should.equal(outputString[cnt]);
		}
	});
});
