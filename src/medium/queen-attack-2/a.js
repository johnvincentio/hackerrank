
/*
https://www.hackerrank.com/challenges/queens-attack-2/problem

Queens Attack 2
*/

/* eslint-disable no-plusplus */

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function isObstacleOLD(row, col, obstacles) {
	// console.error('isObstacle; row ', row, ' col ', col);
	for (let i = 0; i < obstacles.length; i++) {
		// console.error('i ', i, ' obstacle ', obstacles[i]);
		if (obstacles[i][0] === row && obstacles[i][1] === col) {
			return true;
		}
	}
	return false;
}

function isObstacle(row, col, obstacles) {
	// console.error('isObstacle; row ', row, ' col ', col);
	const idx = obstacles.findIndex(item => {
		return item[0] === row && item[1] === col;
	});
	// console.error('idx ', idx);
	return idx > -1;
}

function leftHorizontal(n, row, col, obstacles) {
	let total = 0;
	for (let i = row, j = col - 1; j > 0; j--) {
		if (isObstacle(i, j, obstacles)) {
			break;
		}
		total++;
	}
	console.error('leftHorizontal total ', total);
	return total;
}

function rightHorizontal(n, row, col, obstacles) {
	let total = 0;
	for (let i = row, j = col + 1; j <= n; j++) {
		if (isObstacle(i, j, obstacles)) {
			break;
		}
		total++;
	}
	console.error('rightHorizontal total ', total);
	return total;
}

function upVertical(n, row, col, obstacles) {
	let total = 0;
	for (let i = row + 1, j = col; i <= n; i++) {
		if (isObstacle(i, j, obstacles)) {
			break;
		}
		total++;
	}
	console.error('upVertical total ', total);
	return total;
}

function downVertical(n, row, col, obstacles) {
	let total = 0;

	for (let i = row - 1, j = col; i > 0; i--) {		// left
		if (isObstacle(i, j, obstacles)) {
			break;
		}
		total++;
	}
	console.error('downVertical total ', total);
	return total;
}

function upRightDiagonal(n, row, col, obstacles) {
	let total = 0;

	let i = row + 1;
	let j = col + 1;
	for (; i <= n && j <= n;) {
		if (isObstacle(i, j, obstacles)) {
			break;
		}
		total++;
		i++;
		j++;
	}
	console.error('upRightDiagonal total ', total);
	return total;
}

function downRightDiagonal(n, row, col, obstacles) {
	let total = 0;

	let i = row - 1;
	let j = col - 1;
	for (; i > 0 && j > 0;) {			// down
		if (isObstacle(i, j, obstacles)) {
			break;
		}
		total++;
		i--;
		j--;
	}
	console.error('downRightDiagonal total ', total);
	return total;
}

function upLeftDiagonal(n, row, col, obstacles) {
	let total = 0;

	let i = row + 1;
	let j = col - 1;
	for (; i <= n && j > 0;) {		// down
		if (isObstacle(i, j, obstacles)) {
			break;
		}
		total++;
		i++;
		j--;
	}
	console.error('upLeftDiagonal total ', total);
	return total;
}

function downLeftDiagonal(n, row, col, obstacles) {
	let total = 0;

	let i = row - 1;
	let j = col + 1;
	for (; i > 0 && j <= n;) {
		if (isObstacle(i, j, obstacles)) {
			break;
		}
		total++;
		i--;
		j++;
	}
	console.error('downLeftDiagonal total ', total);
	return total;
}

function queensAttack(n, k, row, col, obstacles) {
	console.error('n ', n, ' k ', k, ' row ', row, ' col ', col, ' obstacles ', obstacles);

	const horizLeft = leftHorizontal(n, row, col, obstacles);
	const horizRight = rightHorizontal(n, row, col, obstacles);

	const verticalUp = upVertical(n, row, col, obstacles);
	const verticalDown = downVertical(n, row, col, obstacles);

	const leftDiagonalUp = upLeftDiagonal(n, row, col, obstacles);
	const leftDiagonalDown = downLeftDiagonal(n, row, col, obstacles);

	const rightDiagonalUp = upRightDiagonal(n, row, col, obstacles);
	const rightDiagonalDown = downRightDiagonal(n, row, col, obstacles);

	const total = horizLeft + horizRight + verticalUp + verticalDown +
		leftDiagonalUp + leftDiagonalDown + rightDiagonalUp + rightDiagonalDown;

	console.error('total ', total);
	return total;
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

	const obstacles = Array(k);
	for (let i = 0; i < k; i++) {
		obstacles[i] = readLine().split(' ').map(obstaclesTemp => parseInt(obstaclesTemp, 10));
	}

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
	downRightDiagonal
};

