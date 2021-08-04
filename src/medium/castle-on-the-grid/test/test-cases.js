/* global describe, it, before */

/*
test case 10
*/

const fs = require('fs');
const should = require('chai').should();

const a = require('../a');

const ide = false; // true if using Visual Studio Code debugger

function createFileName(file) {
  return ide
    ? `./src/medium/castle-on-the-grid/test/${file}`
    : `./test/${file}`;
}

function getFileString(filename) {
  const alpha = fs.readFileSync(filename).toString();
  return alpha
    .trim()
    .split('\n')
    .map((str) => str.trim());
}

describe('testcase-10', () => {
  it('1', () => {
    let inputString = getFileString(createFileName(`input/input10.txt`));
    let outputString = getFileString(
      createFileName(`output/output10.txt`)
    ).join('');

    const result = a.main(inputString);
    console.log('result :', result, ': outputString ', outputString);
    // result.should.be.an('integer');
    result.should.equal(1 * outputString);
  });
});

/*
const inputFilename = ide
  ? './src/medium/castle-on-the-grid/test/input/input10.txt'
  : './test/input/input10.txt';
const outputFilename = ide
  ? './src/medium/castle-on-the-grid/test/output/output10.txt'
  : './test/output/output10.txt';

let inputString = null;
let outputString = null;

  before(() => {
    const alpha = fs.readFileSync(inputFilename).toString();
    inputString = alpha
      .trim()
      .split('\n')
      .map((str) => str.trim());
    const beta = fs.readFileSync(outputFilename).toString();
    outputString = beta
      .trim()
      .split('\n')
      .map((str) => str.trim());
  });
*/
