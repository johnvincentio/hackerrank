/* global describe, it, before */

/*
test cases
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

describe.only('testcase-10', () => {
  it('1', () => {
    let inputString = getFileString(createFileName(`input/input10.txt`));
    let outputString = getFileString(createFileName(`output/output10.txt`));

    const result = a.main(inputString);
    console.log('result :', result, ': outputString ', outputString);
    result.should.equal(1 * outputString.join(''));
  });
});

describe('testcase-12', () => {
  it('1', () => {
    let inputString = getFileString(createFileName(`input/input12.txt`));
    let outputString = getFileString(createFileName(`output/output12.txt`));

    const result = a.main(inputString);
    console.log('result :', result, ': outputString ', outputString);
    result.should.equal(1 * outputString.join(''));
  });
});

describe('testcase-13', () => {
  it('1', () => {
    let inputString = getFileString(createFileName(`input/input13.txt`));
    let outputString = getFileString(createFileName(`output/output13.txt`));

    const result = a.main(inputString);
    console.log('result :', result, ': outputString ', outputString);
    result.should.equal(1 * outputString.join(''));
  });
});
