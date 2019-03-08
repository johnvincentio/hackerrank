//

/*

https://www.hackerrank.com/challenges/electronics-shop/problem

electronics-shop

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function getMoneySpent(keyboards, drives, b) {
	console.error('keyboards ', keyboards, ' drives ', drives, ' b ', b);
	let spent = -1;
	for (let i = 0; i < keyboards.length; i++) {
		for (let j = 0; j < drives.length; j++) {
			const cost = keyboards[i] + drives[j];
			console.error('cost ', cost, ' spent ', spent);
			if (cost > spent && cost <= b) spent = cost;
		}
	}
	return spent;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const bnm = readLine().split(' ');
	const b = parseInt(bnm[0], 10);
	const n = parseInt(bnm[1], 10);
	const m = parseInt(bnm[2], 10);
	// prettier-ignore
	const keyboards = readLine().split(' ').map(keyboardsTemp => parseInt(keyboardsTemp, 10));
	// prettier-ignore
	const drives = readLine().split(' ').map(drivesTemp => parseInt(drivesTemp, 10));

	const result = getMoneySpent(keyboards, drives, b);

	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
