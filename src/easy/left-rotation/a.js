
/*
https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays&h_r=next-challenge&h_v=zen

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

// Complete the rotLeft function below.
function rotLeft(a, d) {		// d is number of rotations
	const array = new Array(a.length);
	const leftMoves = d % a.length;
	const rightMoves = a.length - leftMoves;
	for (let col = 0; col < a.length; col++) {
		const pos = col + rightMoves >= a.length ? col - leftMoves : col + rightMoves;
		array[pos] = a[col];
	}
	return array.join(' ');
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	/* insert from challenge */    const nd = readLine().split(' ');

	const n = parseInt(nd[0], 10);
	const d = parseInt(nd[1], 10);
	const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

	const result = rotLeft(a, d);
	console.log(`result ${result}\n`);
	return result;
}

module.exports = convert;

