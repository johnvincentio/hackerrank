
/*
https://www.hackerrank.com/challenges/mini-max-sum/problem

Mini-Max Sum
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}


// Complete the minimumDistances function below.
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
