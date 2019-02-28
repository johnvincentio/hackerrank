
/*
https://www.hackerrank.com/challenges/the-time-in-words/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

The Time in Words
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

const MINUTES = ['', 'one', 'two', 'three', 'four', 'five', 'six',
	'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen',
	'fourteen', 'quarter', 'sixteen', 'seventeen', 'eighteen',
	'nineteen', 'twenty', 'twenty one', 'twenty two', 'twenty three',
	'twenty four', 'twenty five', 'twenty six', 'twenty seven',
	'twenty eight', 'twenty nine', 'half'];

const HOURS = ['', 'one', 'two', 'three', 'four', 'five', 'six',
	'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];

function timeInWords(h, m) {
	const hourText = HOURS[m > 30 ? h + 1 : h];
	if (m <= 0) {
		return `${hourText} o' clock`;
	}

	const indicator = m > 30 ? 'to' : 'past';
	if (m === 15 || m === 45) {
		return `quarter ${indicator} ${hourText}`;
	}
	if (m === 30) {
		return `half ${indicator} ${hourText}`;
	}
	if (m === 1 || m === 59) {
		return `one minute ${indicator} ${hourText}`;
	}

	const minutesText = MINUTES[m > 30 ? 60 - m : m];
	return `${minutesText} minutes ${indicator} ${hourText}`;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const h = parseInt(readLine(), 10);

	const m = parseInt(readLine(), 10);

	const result = timeInWords(h, m);

	console.log(`result ${result}\n`);
	return result;
}

module.exports = convert;
