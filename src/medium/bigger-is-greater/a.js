
/*
https://www.hackerrank.com/challenges/bigger-is-greater/problem

Bigger Is Greater
*/

/* eslint-disable no-plusplus */

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function biggerIsGreater(w) {


}

function main(input) {
	currentLine = 0;
	inputString = input;

	const T = parseInt(readLine(), 10);

	for (let TItr = 0; TItr < T; TItr++) {
		const w = readLine();

		const result = biggerIsGreater(w);
		console.log(`result ${result}\n`);
	}
}

module.exports = {
	main
};
