//

/*
https://www.hackerrank.com/challenges/castle-on-the-grid/problem

castle-on-the grid
*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
  // console.error('inputString[currentLine] ', inputString[currentLine]);
  return inputString[currentLine++];
}

/*
 * Complete the 'minimumMoves' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY grid
 *  2. INTEGER startX
 *  3. INTEGER startY
 *  4. INTEGER goalX
 *  5. INTEGER goalY
 */

function minimumMoves(grid, startX, startY, goalX, goalY) {
  // prettier-ignore
  console.log('>>> minimumMoves; grid ', grid, ' startX ', startX, ' startY ', startY, ' goalX ', goalX, ' goalY ', goalY);
  return 89;
}

convert.main = function main(input) {
  currentLine = 0;
  inputString = input;

  const n = parseInt(readLine().trim(), 10);

  let grid = [];
  for (let i = 0; i < n; i++) {
    const gridItem = readLine();
    grid.push(gridItem);
  }

  const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

  const startX = parseInt(firstMultipleInput[0], 10);
  const startY = parseInt(firstMultipleInput[1], 10);
  const goalX = parseInt(firstMultipleInput[2], 10);
  const goalY = parseInt(firstMultipleInput[3], 10);
  const result = minimumMoves(grid, startX, startY, goalX, goalY);

  console.log(`result ${result}\n`);
  return result;
};

module.exports = convert;
