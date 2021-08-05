/*
https://www.hackerrank.com/challenges/castle-on-the-grid/problem

castle-on-the grid
*/

/* eslint-disable no-plusplus */
/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	return inputString[currentLine++];
}

const EMPTY = '.';
const GOAL = 'G';
const NO_MOVE = -1;

const XINC = [1, -1, 0, 0];
const YINC = [0, 0, 1, -1];
const MAX_MOVE_TYPES = 4;

let LIMIT = 0;
let MINIMUM_MOVES = 0;

function printBoard(text, board, table) {
	console.log('   Print for ', text);
	for (let x = 0; x < LIMIT; x++) {
		console.log('   board; row ', x, ' board ', board[x].join(''));
	}
	console.log("");
	for (let x = 0; x < LIMIT*LIMIT; x++) {
		console.log('   table; row ', x, ' table ', table[x]);
	}
}

function checkValid(x, y, board, moveType, previousType) {
	if (x < 0 || x >= LIMIT || y < 0 || y >= LIMIT) return false;
	if (board[x][y] === GOAL) return true;				// can move to GOAL square
	if (board[x][y] !== EMPTY) return false;			// square must be otherwise EMPTY
	if (previousType === 0) return true;					// was the initial move
	if (moveType === previousType) return true;		// can keep moving in the same direction
	if (previousType === 1 && moveType === 2) return false;		// cannot reverse
	if (previousType === 2 && moveType === 1) return false;		// cannot reverse
	if (previousType === 3 && moveType === 4) return false;		// cannot reverse
	if (previousType === 4 && moveType === 3) return false;		// cannot reverse
	return true;
}

function countMoves(table) {
	let lastMove = 0;
	let total = 0;
	for (let i = 1; i < table.length; i++) {
		console.log('i ', i, ' table ', table[i]);
		if (table[i] === -1) break;
		if (table[i] !== lastMove) {
			lastMove = table[i];
			total++;
		}
	}
	return total;
}

function nextMove(move, previousType, previousX, previousY, board, table) {
	// prettier-ignore
	// console.log('>>> NextMove; move ', move, ' previousType ', previousType, ' previousX ', previousX, ' previousY ', previousY);
	if (board[previousX][previousY] === GOAL) {
		table[move - 1] = previousType;
		printBoard('*** VICTORY ***', board, table);
		const totalMoves = countMoves(table);
		console.log('totalMoves ', totalMoves);
		if (totalMoves < MINIMUM_MOVES) MINIMUM_MOVES = totalMoves;
		table[move - 1] = NO_MOVE;
		return;
	}
	board[previousX][previousY] = move;
	table[move - 1] = previousType;
	// printBoard('NextMove added move', board, table);

	let newX; let newY;
	for (let moveType = 1; moveType <= MAX_MOVE_TYPES; moveType++) {
		newX = previousX + XINC[moveType - 1];
		newY = previousY + YINC[moveType - 1];
		if (checkValid(newX, newY, board, moveType, previousType)) {
			nextMove(move + 1, moveType, newX, newY, board, table);
		}
	}
	board[previousX][previousY] = EMPTY;
	table[move - 1] = NO_MOVE;
	// printBoard('<<< NextMove; board', board, table);
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
	LIMIT = grid.length;
	MINIMUM_MOVES = 32000;
	const board = [...Array(LIMIT)].map(j=>Array(LIMIT).fill(EMPTY));
	const table = Array(LIMIT * LIMIT).fill(NO_MOVE);
	for (let x = 0; x < LIMIT; x++) {
		board[x] = grid[x].split('');		// this format is easier to read
	}
	board[goalX][goalY] = GOAL;
	printBoard('Initial', board, table);
	nextMove(1, 0, startX, startY, board, table);
	return MINIMUM_MOVES;
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
