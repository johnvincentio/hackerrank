
/*
https://www.hackerrank.com/challenges/service-lane/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

Service Lane
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function largest(array, start, end) {
	let lowest = Number.MAX_SAFE_INTEGER;
	for (let i = start; i <= end; i++) {
		if (array[i] < lowest) {
			lowest = array[i];
		}
	}
	return lowest;
}

function serviceLane(n, width, cases) {
	console.error('n ', n, ' cases ', cases, ' width ', width);
	const result = [];
	for (let i = 0; i < cases.length; i++) {
		console.error('i ', i, ' cases[i] ', cases[i]);
		result.push(largest(width, cases[i][0], cases[i][1]));
	}
	console.error('result ', result);
	return result;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const nt = readLine().split(' ');
	const n = parseInt(nt[0], 10);
	const t = parseInt(nt[1], 10);
	console.error('n ', n, ' t ', t);

	const width = readLine().split(' ').map(widthTemp => parseInt(widthTemp, 10));
	console.error('width ', width);

	const cases = Array(t);

	for (let i = 0; i < t; i++) {
		cases[i] = readLine().split(' ').map(casesTemp => parseInt(casesTemp, 10));
	}

	const result = serviceLane(n, width, cases);

	console.log(`result ${result}\n`);
	return result;
}

module.exports = convert;
