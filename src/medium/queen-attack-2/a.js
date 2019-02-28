
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
	console.error(' n ', n, ' k ', k, ' rQ ', rQ, ' cQ ', cQ, ' obstacles ', obstacles);

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
