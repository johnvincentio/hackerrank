
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
	console.error('queensAttack; size ', size, ' row ', row, ' col ', col, ' obstacles ', obstacles);

	const west = Math.min(obstacles.W, col - 1);
	const east = Math.min(obstacles.E, size - col);

	const north = Math.min(obstacles.N, size - row);
	const south = Math.min(obstacles.S, row - 1);

	const northEast = Math.min(obstacles.NE, Math.min(size - row, size - col));
	const southEast = Math.min(obstacles.SE, Math.min(row - 1, size - col));

	const southWest = Math.min(obstacles.SW, Math.min(row - 1, col - 1));
	const northWest = Math.min(obstacles.NW, Math.min(size - row, col - 1));

	console.log('west ', west, ' east ', east);
	console.log('north ', north, ' south ', south);
	console.log('northEast ', northEast, ' southEast ', southEast);
	console.log('southWest ', southWest, ' northWest ', northWest);
	const total = west + east + north + south + northEast + southEast + southWest + northWest;
	console.error('total ', total);
	return total;
}

function calculateObstacles(obstacles, row, col, obstacleRow, obstacleCol) {
	const distanceRow = Math.abs(obstacleRow - row) - 1;
	const distanceCol = Math.abs(obstacleCol - col) - 1;

	if (col === obstacleCol) {
		if (row < obstacleRow) {
			obstacles.N = Math.min(obstacles.N, distanceRow);		// N
		}
		else {
			obstacles.S = Math.min(obstacles.S, distanceRow);		// S
		}
	}
	else if (row === obstacleRow) {
		if (col < obstacleCol) {
			obstacles.E = Math.min(obstacles.E, distanceCol);		// E
		}
		else {
			obstacles.W = Math.min(obstacles.W, distanceCol);		// W
		}
	}
	else if (distanceRow !== distanceCol) {
		;
	}
	else if (row > obstacleRow) {
		if (col > obstacleCol) {
			obstacles.SE = Math.min(obstacles.SE, distanceRow);			// SE
		}
		else {
			obstacles.SW = Math.min(obstacles.SW, distanceRow);			// SW
		}
	}
	else if (row < obstacleRow) {
		if (col > obstacleCol) {
			obstacles.NE = Math.min(obstacles.NE, distanceRow);			// NE
		}
		else {
			obstacles.NW = Math.min(obstacles.NW, distanceRow);			// NW
		}
	}
	// console.error('calculateObstacles::obstacles ', obstacles);
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


/*

function calculateObstacles(obstacles, row, col, obstacleRow, obstacleCol) {
	if (col === obstacleCol) {
		if (row < obstacleRow) {
			const distance = obstacleRow - row;
			if (obstacles.N === null || distance < obstacles.N) {
				obstacles.N = distance;
			}
		}
		else if (row > obstacleRow) {
			const distance = row - obstacleRow;
			if (obstacles.S === null || distance < obstacles.S) {
				obstacles.S = distance;
			}
		}
	}

	if (row === obstacleRow) {
		if (col < obstacleCol) {
			const distance = obstacleCol - col;
			if (obstacles.W === null || distance < obstacles.W) {
				obstacles.W = distance;
			}
		}
		else if (col > obstacleCol) {
			const distance = col - obstacleCol;
			if (obstacles.S === null || distance < obstacles.S) {
				obstacles.S = distance;
			}
		}
	}

	if (row < obstacleRow && col < obstacleCol) {		// SW
		if (row < obstacleRow) {
			const distance = obstacleRow - row;
			if (obstacles.N === null || distance < obstacles.N) {
				obstacles.N = distance;
			}
		}

	}
	// console.error('calculateObstacles::appObstacles ', appObstacles);
}

function createBoard(n, obstacles) {
	const board = new Array(n + 1);
	for (let i = 0; i <= n; i++) {
		board[i] = new Array(n + 1);
	}
	for (let i = 0; i <= n; i++) {
		for (let j = 0; j <= n; j++) {
			board[i][j] = false;
		}
	}
	for (let i = 0; i < obstacles.length; i++) {
		const row = obstacles[i][0];
		const col = obstacles[i][1];
		// console.error('row ', row, ' col ', col);
		board[row][col] = true;
	}
	// console.error('board ', board);
	return board;
}

function setupOLD() {
	return {
		'N': null, 'NE': null, 'E': null, 'SE': null, 'S': null, 'SW': null, 'W': null, 'NW': null
	};
}

function calculateObstacles(obstacles, row, col, obstacleRow, obstacleCol) {
	const distanceRow = Math.abs(obstacleRow - row);
	const distanceCol = Math.abs(obstacleCol - col);

	if (col === obstacleCol && row < obstacleRow && distanceRow < obstacles.N) {	// N
		obstacles.N = distanceRow;
	}
	if (col === obstacleCol && row > obstacleRow && distanceRow < obstacles.S) {	// S
		obstacles.S = distanceRow;
	}

	if (row === obstacleRow && col < obstacleCol && distanceCol < obstacles.W) {	// W
		obstacles.W = distanceCol;
	}
	if (row === obstacleRow && col > obstacleCol && distanceCol < obstacles.E) {	// E
		obstacles.E = distanceCol;
	}

	if (distanceRow !== distanceCol) {
		return;
	}

	if (row > obstacleRow && col > obstacleCol && distanceRow < obstacles.NE) {	// NE
		obstacles.NE = distanceRow;
	}

	if (row < obstacleRow && col > obstacleCol && distanceRow < obstacles.SE) {	// SE
		obstacles.SE = distanceRow;
	}

	if (row < obstacleRow && col < obstacleCol && distanceRow < obstacles.SW) {	// SW
		obstacles.SW = distanceRow;
	}

	if (row > obstacleRow && col < obstacleCol && distanceRow < obstacles.NW) {	// NW
		obstacles.NW = distanceRow;
	}

	// console.error('calculateObstacles::appObstacles ', appObstacles);
}

*/
