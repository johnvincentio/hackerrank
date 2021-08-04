/*
https://www.hackerrank.com/challenges/array-left-rotation/problem

Left Rotation
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
  // console.error('inputString[currentLine] ', inputString[currentLine]);
  return inputString[currentLine++];
}

// d is number of rotations
function rotateLeft(d, arr) {
  console.log('>>> rotateLeft; d ', d, ' arr ', arr);
  const array = new Array(arr.length);
  const leftMoves = d % arr.length;
  const rightMoves = arr.length - leftMoves;
  console.log('leftMoves ', leftMoves, ' rightMoves ', rightMoves);
  for (let col = 0; col < arr.length; col++) {
    const pos =
      col + rightMoves >= arr.length ? col - leftMoves : col + rightMoves;
    array[pos] = arr[col];
  }
  return array.join(' ');
}

convert.main = function main(input) {
  currentLine = 0;
  inputString = input;

  /* insert from challenge */

  const nd = readLine().split(' ');

  const n = parseInt(nd[0], 10);
  const d = parseInt(nd[1], 10);
  const arr = readLine()
    .replace(/\s+$/g, '')
    .split(' ')
    .map((arrTemp) => parseInt(arrTemp, 10));

  const result = rotateLeft(d, arr);
  console.log(`result ${result}\n`);
  return result;
};

module.exports = convert;
