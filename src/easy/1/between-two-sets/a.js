//

/*

https://www.hackerrank.com/challenges/between-two-sets/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign&h_r=next-challenge&h_v=zen

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function factor(num, arr) {
	// console.error('num ', num, ' arr ', arr);
	for (let idx = 0; idx < arr.length; idx++) {
		const tmp = arr[idx];
		const valid = tmp > num ? tmp % num === 0 : num % tmp === 0;
		if (!valid) return false;
	}
	return true;
}

function getTotalX(a, b) {
	console.error('a ', a, ' b ', b);
	let total = 0;
	const aMax = Math.max(...a);
	const bMin = Math.min(...b);
	for (let num = aMax; num <= bMin; num++) {
		// console.error('num ', num);
		if (factor(num, a) && factor(num, b)) {
			console.error(`${num} is a valid factor`);
			total++;
		}
	}
	return total;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const nm = readLine().split(' ');
	const n = parseInt(nm[0], 10);
	const m = parseInt(nm[1], 10);

	const a = readLine()
		.split(' ')
		.map(aTemp => parseInt(aTemp, 10));
	const b = readLine()
		.split(' ')
		.map(bTemp => parseInt(bTemp, 10));

	const result = getTotalX(a, b);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
