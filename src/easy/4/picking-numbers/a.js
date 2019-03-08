//

/*

https://www.hackerrank.com/challenges/picking-numbers/problem?h_r=next-challenge&h_v=zen

picking-numbers

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function pickingNumbers(a) {
	// console.error('a; ', a);
	const score = Array(100);
	for (let i = 0; i < 100; i++) {
		score[i] = 0;
	}
	for (let i = 0; i < a.length; i++) {
		score[a[i] - 1]++;
	}
	// console.error('score ', score);
	let longest = 0;
	for (let i = 0, j = 1; j < 100; i++, j++) {
		const total = score[i] + score[j];
		if (total > longest) longest = total;
	}
	return longest;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const n = parseInt(readLine(), 10);
	// prettier-ignore
	const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
	const result = pickingNumbers(a);

	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
