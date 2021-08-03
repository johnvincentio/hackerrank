/*
https://www.hackerrank.com/challenges/dynamic-array/problem

dynamic-array
*/

/* eslint-disable no-plusplus */

let currentLine = 0;
let inputString = '';

function readLine() {
  return inputString[currentLine++];
}

function dynamicArray(n, queries) {
  console.log('>>> dynamicArray; n ', n, ' queries length ', queries.length);
  // Write your code here
}

function main(input) {
  currentLine = 0;
  inputString = input;

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const n = parseInt(firstMultipleInput[0], 10);
  console.log(`n ${n}\n`);

  const q = parseInt(firstMultipleInput[1], 10);
  console.log(`q ${q}\n`);

  let queries = Array(q);

  for (let i = 0; i < q; i++) {
    queries[i] = readLine()
      .replace(/\s+$/g, '')
      .split(' ')
      .map((queriesTemp) => parseInt(queriesTemp, 10));
  }

  const result = dynamicArray(n, queries);

  console.log(`result ${result}\n`);
  return result;
}

module.exports = {
  main,
  dynamicArray,
};
