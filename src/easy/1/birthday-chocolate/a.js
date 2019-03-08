//

/*

https://www.hackerrank.com/challenges/the-birthday-bar/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

birthday-chocolate

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

/*
find contiguous squares of length ${month} where sum of square values = ${day}
*/
function birthday(squares, day, month) {
	console.error('squares ', squares, ' day ', day, ' month ', month);
	let total = 0;
	for (let idx = 0; idx < squares.length - month + 1; idx++) {
		console.error('idx ', idx);
		const arr = squares.slice(idx, idx + month);
		const tmp = arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
		console.error('tmp ', tmp, ' arr ', arr);

		if (tmp === day) {
			total++;
			console.error('found solution; arr ', arr);
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

	const n = parseInt(readLine().trim(), 10); // number of squares of chocolate
	const s = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map(sTemp => parseInt(sTemp, 10)); // numbers on the chocolate squares
	const dm = readLine()
		.replace(/\s+$/g, '')
		.split(' ');
	const d = parseInt(dm[0], 10); // Ron's birth day
	const m = parseInt(dm[1], 10); // Ron's birth month

	const result = birthday(s, d, m);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
