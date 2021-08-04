/*
https://www.hackerrank.com/challenges/castle-on-the-grid/problem

castle-on-the grid
*/

/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

let LIMIT = 0;
const EMPTY = 0;
const BLOCK = -1;
const GOAL = -100;

const XINC = [1, -1, 0, 0];
const YINC = [0, 0, 1, -1];
const MAX_MOVE_TYPES = 4;

/*
Grid:
	'X' - blocked
	'G' - the goal
	'-' - empty
	'number' - occupied by this move 'number'
*/
function start(grid, startX, startY, goalX, goalY) {
	// int board[][] = new int[XLIMIT][YLIMIT];
	// Debug.timing("Starting ("+x+","+y+")");
	LIMIT = grid.length;

	const board = [...Array(LIMIT)].map(x=>Array(LIMIT).fill(EMPTY));
	console.log('(1) board ', board);
	for (let y = 0; y < LIMIT; y++) {
		for (let x = 0; x < LIMIT; x++) {
			if (grid[y][x] === 'X') board[y][x] = BLOCK;
		}
	}
	console.log('(2) board ', board);
	board[goalY][goalX] = GOAL;
	console.log('(3) board ', board);



	grid[goalY][goalX] = 'G';
	console.log('grid ', grid);
	// nextMove(1, startX, startY, grid);
	// Debug.timing("Finished ("+x+","+y+")");
	// Debug.flush();
}

function nextMove(move, startX, startY, grid) {
	// prettier-ignore
	console.log('>>> NextMove; move ', move, ' startX ', startX, ' startY ', startY, ' grid ', grid);
	grid[startY][startX] = move;
	console.log('grid ', grid);
	grid[0] = 'erdg';
	console.log('grid ', grid);
	// if (move >= XYLIMIT)
	// 	printBoard (board);
	let newX; let newY;
	// for (let i = 0; i < MAX_MOVE_TYPES; i++) {
	// 	newX = x + Xinc[i];
	// 	newY = y + Yinc[i];
	// 	if (newX < 0 || newX >= XLIMIT) continue;
	// 	if (newY < 0 || newY >= YLIMIT) continue;
	// 	if (board[newX][newY] < 1) nextMove(move + 1, newX, newY, board);
	// }
	grid[startY][startX] = 0;
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
	start(grid, startX, startY, goalX, goalY);
	return 89;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const n = parseInt(readLine().trim(), 10);

	const grid = [];
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
