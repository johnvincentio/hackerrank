//

/*

https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

divisible-sum-pairs

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function divisibleSumPairs(n, k, array) {
	console.error('n ', n, ' k ', k, ' arr ', array);
	let total = 0;
	for (let i1 = 0; i1 < n; i1++) {
		for (let i2 = i1 + 1; i2 < n; i2++) {
			const sum = array[i1] + array[i2];
			// const valid = sum > k ? sum % k === 0 : k % sum === 0;
			const valid = sum % k === 0;
			if (valid) {
				console.error(`valid, ${array[i1]}, ${array[i2]}`);
				total++;
			}
		}
	}
	return total;
}

/*
Print an integer denoting the total number of ways that Lily can portion her 
chocolate bar to share with Ron
*/

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const nk = readLine().split(' ');
	const n = parseInt(nk[0], 10);
	const k = parseInt(nk[1], 10);
	const ar = readLine()
		.split(' ')
		.map(arTemp => parseInt(arTemp, 10));

	const result = divisibleSumPairs(n, k, ar);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
