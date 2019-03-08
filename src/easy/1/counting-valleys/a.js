//

/*

https://www.hackerrank.com/challenges/counting-valleys/problem

counting-valleys

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function countingValleys(n, s) {
	console.error('n ', n, ' s ', s);
	let totalValleys = 0;
	let altitude = 0;
	for (let i = 0; i < s.length; i++) {
		const tmp = s[i];
		if (tmp === 'U') {
			altitude++;
		} else if (tmp === 'D') {
			altitude--;
			if (altitude === -1) totalValleys++;
		}
	}
	return totalValleys;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	// prettier-ignore
	const n = parseInt(readLine(), 10);
	const s = readLine();
	const result = countingValleys(n, s);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
