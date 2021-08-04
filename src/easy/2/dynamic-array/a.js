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
  // console.log('>>> dynamicArray; n ', n, ' queries length ', queries.length);
  // console.log('queries ', queries);

  let result = [];
  let arr = Array(n);
  let lastAnswer = 0;
  for (let i = 0; i < n; i++) arr[i] = [];

  for (let i = 0; i < queries.length; i++) {
    const query = queries[i][0];
    const x = queries[i][1];
    const y = queries[i][2];
    // console.log('query ', query, ' x ', x, ' y ', y);
    let idx = (x ^ lastAnswer) % n;
    // console.log('idx ', idx, ' lastAnswer ', lastAnswer);
    if (query === 1) {
      arr[idx].push(y);
    } else if (query === 2) {
      lastAnswer = arr[idx][y % arr[idx].length];
      result.push(lastAnswer);
    }
  }
  // console.log('arr ', arr);
  // console.log('<<< dynamicArray; result ', result);
  return result;
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
