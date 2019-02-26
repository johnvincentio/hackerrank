//

/*

https://www.hackerrank.com/challenges/cut-the-sticks/problem

cut-the-sticks

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function cutTheSticks(arr) {
	const sorted = arr.sort((a, b) => a - b);
	const result = [];

	while (sorted.length > 0) {
		result.push(sorted.length);
		const lowest = sorted[0];

		sorted.forEach((item, index, array) => {
			array[index] -= lowest;
		});

		const idx = 0;
		while (sorted[idx] <= 0) {
			sorted.shift();
		}
	}
	return result;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const n = parseInt(readLine(), 10);
	// prettier-ignore
	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const result = cutTheSticks(arr);

	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
