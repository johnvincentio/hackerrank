
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
	const arr = w.split('');
	let currentPos = arr.length - 1;
	while (currentPos > 0) {
		for (let comparePos = currentPos - 1; comparePos > -1; comparePos--) {
			if (arr[currentPos] > arr[comparePos]) {
				// console.log('greater than; currentPos ', currentPos, ' comparePos ', comparePos);
				// console.log('from ', arr[currentPos], ' to ', arr[comparePos]);

				const tmp = arr[comparePos];
				arr[comparePos] = arr[currentPos];
				arr[currentPos] = tmp;

				const result = [...arr.slice(0, comparePos + 1), ...arr.slice(comparePos + 1, arr.length).sort()];
				// console.log('result ', result);
				return result.join('');
			}
		}
		currentPos--;
	}
	return 'no answer';
}

function main(input) {
	currentLine = 0;
	inputString = input;

	const arr = [];

	const T = parseInt(readLine(), 10);

	for (let TItr = 0; TItr < T; TItr++) {
		const w = readLine();

		const result = biggerIsGreater(w);
		console.log(`result ${result}\n`);
		arr.push(result);
	}
	return arr;
}

module.exports = {
	main
};
