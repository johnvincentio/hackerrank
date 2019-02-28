
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

// function isObstacleOLD(row, col, obstacles) {
// 	// console.error('isObstacle; row ', row, ' col ', col);
// 	for (let i = 0; i < obstacles.length; i++) {
// 		// console.error('i ', i, ' obstacle ', obstacles[i]);
// 		if (obstacles[i][0] === row && obstacles[i][1] === col) {
// 			return true;
// 		}
// 	}
// 	return false;
// }

// function isObstacle(row, col, obstacles) {
// 	// console.error('isObstacle; row ', row, ' col ', col);
// 	const idx = obstacles.findIndex(item => {
// 		return item[0] === row && item[1] === col;
// 	});
// 	// console.error('idx ', idx);
// 	return idx > -1;
// }

function leftHorizontal(n, row, col, board) {
	let total = 0;
	for (let i = row, j = col - 1; j > 0; j--) {
		if (board[i][j]) {
			break;
		}
		total++;
	}
	console.error('leftHorizontal total ', total);
	return total;
}

function rightHorizontal(n, row, col, board) {
	let total = 0;
	for (let i = row, j = col + 1; j <= n; j++) {
		if (board[i][j]) {
			break;
		}
		total++;
	}
	console.error('rightHorizontal total ', total);
	return total;
}

function upVertical(n, row, col, board) {
	let total = 0;
	for (let i = row + 1, j = col; i <= n; i++) {
		if (board[i][j]) {
			break;
		}
		total++;
	}
	console.error('upVertical total ', total);
	return total;
}

function downVertical(n, row, col, board) {
	let total = 0;

	for (let i = row - 1, j = col; i > 0; i--) {		// left
		if (board[i][j]) {
			break;
		}
		total++;
	}
	console.error('downVertical total ', total);
	return total;
}

function upRightDiagonal(n, row, col, board) {
	let total = 0;

	let i = row + 1;
	let j = col + 1;
	for (; i <= n && j <= n;) {
		if (board[i][j]) {
			break;
		}
		total++;
		i++;
		j++;
	}
	console.error('upRightDiagonal total ', total);
	return total;
}

function downRightDiagonal(n, row, col, board) {
	let total = 0;

	let i = row - 1;
	let j = col - 1;
	for (; i > 0 && j > 0;) {			// down
		if (board[i][j]) {
			break;
		}
		total++;
		i--;
		j--;
	}
	console.error('downRightDiagonal total ', total);
	return total;
}

function upLeftDiagonal(n, row, col, board) {
	let total = 0;

	let i = row + 1;
	let j = col - 1;
	for (; i <= n && j > 0;) {		// down
		if (board[i][j]) {
			break;
		}
		total++;
		i++;
		j--;
	}
	console.error('upLeftDiagonal total ', total);
	return total;
}

function downLeftDiagonal(n, row, col, board) {
	let total = 0;

	let i = row - 1;
	let j = col + 1;
	for (; i > 0 && j <= n;) {
		if (board[i][j]) {
			break;
		}
		total++;
		i--;
		j++;
	}
	console.error('downLeftDiagonal total ', total);
	return total;
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

function queensAttack(n, k, row, col, appObstacles) {
	// console.error('n ', n, ' k ', k, ' row ', row, ' col ', col, ' obstacles ', obstacles);

	// const board = createBoard(n, obstacles);
	// const board = createBoard(0, []);

	const horizLeft = leftHorizontal(n, row, col, appObstacles);
	const horizRight = rightHorizontal(n, row, col, appObstacles);

	const verticalUp = upVertical(n, row, col, appObstacles);
	const verticalDown = downVertical(n, row, col, appObstacles);

	const leftDiagonalUp = upLeftDiagonal(n, row, col, appObstacles);
	const leftDiagonalDown = downLeftDiagonal(n, row, col, appObstacles);

	const rightDiagonalUp = upRightDiagonal(n, row, col, appObstacles);
	const rightDiagonalDown = downRightDiagonal(n, row, col, appObstacles);

	const total = horizLeft + horizRight + verticalUp + verticalDown +
		leftDiagonalUp + leftDiagonalDown + rightDiagonalUp + rightDiagonalDown;

	console.error('total ', total);
	return total;
}

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
	// console.error('calculateObstacles::appObstacles ', appObstacles);
}

function setup() {
	return {
		'N': null, 'NE': null, 'E': null, 'SE': null, 'S': null, 'SW': null, 'W': null, 'NW': null
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
	console.error('(1) obstacles ', obstacles);

	for (let i = 0; i < k; i++) {
		const obstacle = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
		calculateObstacles(obstacles, rQ, cQ, obstacle[0], obstacle[1]);
	}
	console.error('obstacles ', obstacles);

	console.error(' before queensAttack');
	const result = queensAttack(n, k, rQ, cQ, obstacles);

	console.log(`result ${result}\n`);
	return result;
}

module.exports = {
	main,
	leftHorizontal,
	rightHorizontal,
	upVertical,
	downVertical,
	upLeftDiagonal,
	downLeftDiagonal,
	upRightDiagonal,
	downRightDiagonal,
	calculateObstacles,
	setup
};
