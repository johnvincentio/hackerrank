//

/*

https://www.hackerrank.com/challenges/drawing-book/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

drawing-book

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function pageCount(n, p) {
	console.error('n ', n, ' p ', p);
	const actualPages = 1 + Math.ceil((n - 1) / 2);
	const forwards = Math.floor(p / 2);
	const backwards = actualPages - forwards - 1;
	console.error('actualPages ', actualPages, ' forwards ', forwards, ' backwards ', backwards);
	return Math.min(forwards, backwards);
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	// prettier-ignore
	const n = parseInt(readLine(), 10);
	const p = parseInt(readLine(), 10);

	const result = pageCount(n, p);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
