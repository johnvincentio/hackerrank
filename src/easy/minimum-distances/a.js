
/*
https://www.hackerrank.com/challenges/minimum-distances/problem

Minimum Distances
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function minimumDistances(a) {
	let minimum = -1;		// no match
	for (let i = 0; i < a.length; i++) {
		// console.error('current ', a[i]);
		for (let j = i + 1; j < a.length; j++) {
			// console.error('next ', a[j]);
			if (a[i] === a[j]) {
				const distance = j - i;
				// console.error('distance ', distance);
				if (minimum === -1 || distance < minimum) {
					minimum = distance;
				}
			}
		}
	}
	// console.error('a ', a);
	return minimum;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const n = parseInt(readLine(), 10);

	const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

	const result = minimumDistances(a);

	console.log(`result ${result}\n`);
	return result;
}

module.exports = convert;
