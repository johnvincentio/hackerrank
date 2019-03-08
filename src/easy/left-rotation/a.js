
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
	console.log('a ', a, ' d ', d);
	const array = new Array(a.length);

	const len = a.length;
	// const mod = a.length % d;
	const mod = d % a.length;
	console.log('len ', len, ' mod ', mod);
	for (let col = 0; col < len; col++) {
		// const pos = ((mod + col) % len) + 1;
		const pos = (col + mod + 1) % len;
		console.log('pos ', pos, ' col ', col);
		array[pos] = a[col];
	}
	// console.log('array ', array);
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

