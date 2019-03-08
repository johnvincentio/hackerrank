//

/*

https://www.hackerrank.com/challenges/day-of-the-programmer/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

day-of-the-programmer


*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function dayOfProgrammer(year) {
	console.error('year ', year);
	if (year < 1918) {
		console.error('julian');
		const leapYear = year % 4 === 0;
		return leapYear ? `12.09.${year}` : `13.09.${year}`;
	}
	// only 15 days in February
	// end of august = 230 days
	// day is '26.09'
	// not a leap year
	//
	if (year === 1918) {
		console.error('julian 1918');
		return '26.09.1918';
	}
	console.error('gregorian');
	const leapYear = year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
	return leapYear ? `12.09.${year}` : `13.09.${year}`;
}

/*
Given a year ${year}, find the date of the 256th day of that year according to 
	the official Russian calendar during that year.

Print it in the format dd.mm.yyyy, where:
	dd is the two-digit day
	mm is the two-digit month
	yyyy is ${year}
*/

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const year = parseInt(readLine().trim(), 10);
	const result = dayOfProgrammer(year);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
