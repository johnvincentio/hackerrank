
/*
https://www.hackerrank.com/challenges/minimum-distances/problem

Minimum Distances
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function minimumDistances(a) {

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
