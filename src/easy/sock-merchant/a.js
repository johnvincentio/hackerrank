//

/*

https://www.hackerrank.com/challenges/sock-merchant/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

sock-merchant

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function sockMerchant(n, arr) {
	const socks = Array(100);
	for (let i = 0; i < 100; i++) {
		socks[i] = 0;
	}
	for (let i = 0; i < arr.length; i++) {
		socks[arr[i] - 1]++;
	}
	let total = 0;
	for (let i = 0; i < 100; i++) {
		const tmp = Math.floor(socks[i] / 2);
		total += tmp;
	}
	return total;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	// prettier-ignore
	const n = parseInt(readLine(), 10);
	// prettier-ignore
	const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

	const result = sockMerchant(n, ar);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
