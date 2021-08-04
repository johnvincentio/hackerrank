/* global describe, it, before */

/*
test case 10
*/

const fs = require('fs');
const should = require('chai').should();

const a = require('../a');

const ide = false; // true if using Visual Studio Code debugger
const name = ide
  ? './src/medium/castle-on-the=grid/test/test-case-10/input.txt'
  : './test/input/input10.txt';

let inputString = null;

describe('testcase-17', () => {
  before(() => {
    const alpha = fs.readFileSync(name).toString();
    inputString = alpha
      .trim()
      .split('\n')
      .map((str) => str.trim());
  });

  it('1', () => {
    const result = a.main(inputString);
    result.should.equal(110198);
  });
});
