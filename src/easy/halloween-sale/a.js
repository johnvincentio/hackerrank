/*
https://www.hackerrank.com/challenges/halloween-sale/problem?h_r=next-challenge&h_v=zen

Halloween Sale
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function howManyGames(p, d, m, s) {
	let total = 0;
	let money = s;
	let bookPrice = p;

	if (bookPrice > money) {
		return total;
	}

	total++;			// first book;
	money -= bookPrice;

	while (money >= 0) {
		bookPrice -= d;					// reduce the price
		if (bookPrice < m) {		// price no lower than m
			bookPrice = m;
		}
		money -= bookPrice;
		if (money >= 0) {
			total++;
		}
	}

	console.error('p ', p, ' d ', d, ' m ', m, ' s ', s)
	return total;
}


convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const pdms = readLine().split(' ');
	const p = parseInt(pdms[0], 10);
	const d = parseInt(pdms[1], 10);
	const m = parseInt(pdms[2], 10);
	const s = parseInt(pdms[3], 10);

	const result = howManyGames(p, d, m, s);
	console.log(`result ${result}\n`);
	return result;
}

module.exports = convert;
