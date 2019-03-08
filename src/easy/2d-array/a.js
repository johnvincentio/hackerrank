
/*
https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

2D Array
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function hourglassSum(arr) {
	let maximum = Number.MIN_SAFE_INTEGER;
	console.log('arr ', arr);
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			const cnt = arr[row][col] + arr[row][col + 1] + arr[row][col + 2] +
				arr[row + 1][col + 1] +
				arr[row + 2][col] + arr[row + 2][col + 1] + arr[row + 2][col + 2];
			if (cnt > maximum) {
				maximum = cnt;
			}
		}
	}
	return maximum;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const arr = Array(6);
	for (let i = 0; i < 6; i++) {
		arr[i] = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
	}
	const result = hourglassSum(arr);
	console.log(`result ${result}\n`);
	return result;
}

module.exports = convert;
