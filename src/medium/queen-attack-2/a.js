
/*
https://www.hackerrank.com/challenges/queens-attack-2/problem

Queens Attack 2
*/

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

let inputString = '';
let currentLine = 0;

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function queensAttack(size, row, col, obstacles) {
	// console.error('queensAttack; size ', size, ' row ', row, ' col ', col, ' obstacles ', obstacles);

	const west = Math.min(obstacles.W, col - 1);
	const east = Math.min(obstacles.E, size - col);

	const north = Math.min(obstacles.N, size - row);
	const south = Math.min(obstacles.S, row - 1);

	const northEast = Math.min(obstacles.NE, Math.min(size - row, size - col));
	const southEast = Math.min(obstacles.SE, Math.min(row - 1, size - col));

	const southWest = Math.min(obstacles.SW, Math.min(row - 1, col - 1));
	const northWest = Math.min(obstacles.NW, Math.min(size - row, col - 1));

	// console.log('west ', west, ' east ', east);
	// console.log('north ', north, ' south ', south);
	// console.log('northEast ', northEast, ' southEast ', southEast);
	// console.log('southWest ', southWest, ' northWest ', northWest);
	const total = west + east + north + south + northEast + southEast + southWest + northWest;
	// console.error('total ', total);
	return total;
}

function calculateObstacles(obstacles, row, col, obstacleRow, obstacleCol) {
	if (row === obstacleRow && col === obstacleCol) {		// ignore queen square
		return;
	}

	const distanceRow = Math.abs(obstacleRow - row) - 1;
	const distanceCol = Math.abs(obstacleCol - col) - 1;

	const higherRow = obstacleRow - row > 0;
	const higherCol = obstacleCol - col > 0;

	if (col === obstacleCol && higherRow) {
		obstacles.N = Math.min(obstacles.N, distanceRow);		// N
	}
	if (col === obstacleCol && !higherRow) {
		obstacles.S = Math.min(obstacles.S, distanceRow);		// S
	}
	if (row === obstacleRow && higherCol) {
		obstacles.E = Math.min(obstacles.E, distanceCol);		// E
	}
	if (row === obstacleRow && !higherCol) {
		obstacles.W = Math.min(obstacles.W, distanceCol);		// W
	}

	if (distanceRow !== distanceCol) {
		return;
	}

	if (higherRow && higherCol) {
		obstacles.NE = Math.min(obstacles.NE, distanceRow);			// NE
	}
	if (!higherRow && higherCol) {
		obstacles.SE = Math.min(obstacles.SE, distanceRow);			// SE
	}
	if (!higherRow && !higherCol) {
		obstacles.SW = Math.min(obstacles.SW, distanceRow);			// SW
	}
	if (higherRow && !higherCol) {
		obstacles.NW = Math.min(obstacles.NW, distanceRow);			// NW
	}
}

function setup() {
	return {
		'N': Number.MAX_SAFE_INTEGER, 'NE': Number.MAX_SAFE_INTEGER,
		'E': Number.MAX_SAFE_INTEGER, 'SE': Number.MAX_SAFE_INTEGER,
		'S': Number.MAX_SAFE_INTEGER, 'SW': Number.MAX_SAFE_INTEGER,
		'W': Number.MAX_SAFE_INTEGER, 'NW': Number.MAX_SAFE_INTEGER
	};
}

function main(input) {
	currentLine = 0;
	inputString = input;

	const nk = readLine().split(' ');
	const n = parseInt(nk[0], 10);
	const k = parseInt(nk[1], 10);
	const rqCq = readLine().split(' ');
	const rQ = parseInt(rqCq[0], 10);
	const cQ = parseInt(rqCq[1], 10);

	const obstacles = setup();
	for (let i = 0; i < k; i++) {
		const obstacle = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
		calculateObstacles(obstacles, rQ, cQ, obstacle[0], obstacle[1]);
	}
	const result = queensAttack(n, rQ, cQ, obstacles);
	console.log(`result ${result}\n`);
	return result;
}

module.exports = {
	main,
	calculateObstacles,
	setup
};
