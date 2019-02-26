//

/*

https://www.hackerrank.com/challenges/big-sorting/problem

big-sorting

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function bigSorting(unsorted) {
	return unsorted.sort((a, b) => {
		if (a.length > b.length) {
			return 1;
		} else if (a.length < b.length) {
			return -1;
		}
		for (let i = 0; i < a.length; i++) {
			if (a[i] !== b[i]) {
				return a[i] > b[i] ? 1 : -1;
			}
		}
		return 0;
	});
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	// prettier-ignore
	const n = parseInt(readLine(), 10);

	const unsorted = [];

	for (let i = 0; i < n; i++) {
		const unsortedItem = readLine();
		unsorted.push(unsortedItem);
	}

	const result = bigSorting(unsorted);
	// console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
