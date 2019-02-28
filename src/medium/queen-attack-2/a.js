
/*
{Challenge URL}

{Challenge name}
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function queensAttack(n, k, rQ, cQ, obstacles) {
	console.error('n ', n, ' k ', k, ' rQ ', rQ, ' cQ ', cQ, ' obstacles ', obstacles);

	// horizontals

	let total = 0;
	for (let i = rQ - 1; i > 0; i--) {		// left
		total++;
	}
	console.error('(1a) total ', total);
	for (let i = rQ + 1; i <= n; i++) {		// right
		total++;
	}
	console.error('(1b) total ', total);

	// verticals

	for (let i = cQ - 1; i > 0; i--) {		// down
		total++;
	}
	console.error('(2a) total ', total);
	for (let i = cQ + 1; i <= n; i++) {		// up
		total++;
	}
	console.error('(2b) total ', total);

	// diagonal left

	let i1 = rQ - 1;
	let j1 = cQ - 1;
	for (; i1 > 0 && j1 > 0;) {			// down
		total++;
		i1--;
		j1--;
	}
	console.error('(3a) total ', total);

	let i2 = rQ + 1;
	let j2 = cQ + 1;
	for (; i2 < n && j2 < n;) {			// up
		total++;
		i2++;
		j2++;
	}
	console.error('(3b) total ', total);

	// diagonal right

	let i3 = rQ + 1;
	let j3 = cQ - 1;
	for (; i3 < n && j3 > 0;) {		// down
		total++;
		i3++;
		j3--;
	}
	console.error('(4a) total ', total);

	let i4 = rQ + 1;
	let j4 = cQ - 1;
	for (; i4 < n && j4 > 0;) {
		total++;
		i4++;
		j4--;
	}
	console.error('(4b) total ', total);

	console.error('total ', total);
	return total;
}

convert.main = function main(input) {
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

module.exports = convert;
