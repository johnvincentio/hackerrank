
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

function biggerIsGreaterOLD(w) {
	console.log('w ', w);
	let changed = false;
	let arr = w.split('');
	console.log('start arr ', arr);
	let currentPos = arr.length - 1;
	console.log('currentPos ', currentPos);
	while (currentPos > 0) {
		let swapPos = currentPos - 1;
		console.log(' currentPos ', currentPos, ' from ', arr[currentPos], ' to ', arr[swapPos]);
		if (arr[currentPos] <= arr[swapPos]) {
			console.log('less than or equal');
			currentPos--;
		}
		else {
			console.log('greater than');
			const tmp = arr[swapPos];
			arr[swapPos] = arr[currentPos];
			arr[currentPos] = tmp;
			changed = true;
			console.log('arr ', arr);
			currentPos = -1;
		}
	}
	console.log('<<< changed ', changed, ' arr ', arr);
	return changed ? arr.join('') : 'no answer';
}

function biggerIsGreater(w) {
	console.log('w ', w);
	let changed = false;
	let arr = w.split('');
	console.log('start arr ', arr);
	let currentPos = arr.length - 1;
	console.log('currentPos ', currentPos);
	while (currentPos > 0) {
		for (let comparePos = currentPos - 1; comparePos > -1; comparePos--) {
			if (arr[currentPos] > arr[comparePos]) {
				console.log('greater than; currentPos ', currentPos, ' comparePos ', comparePos);
				console.log('from ', arr[currentPos], ' to ', arr[comparePos]);

				const tmp = arr[comparePos];
				arr[comparePos] = arr[currentPos];
				arr[currentPos] = tmp;
				changed = true;
				console.log('arr ', arr);

				const jv = arr.slice(0, comparePos + 1);
				console.log('jv ', jv);

				const jv1 = arr.slice(comparePos + 1, arr.length);
				console.log('jv1 ', jv1);

				const jv2 = jv1.sort();
				console.log('jv2 ', jv2);

				const result = [...jv, ...jv2];
				console.log('result ', result);
				return result.join('');
			}
		}
		currentPos--;


	}
	// console.log('<<< changed ', changed, ' arr ', arr);
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
