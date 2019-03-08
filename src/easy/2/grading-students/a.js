//

/*
https://www.hackerrank.com/challenges/grading/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	return inputString[currentLine++];
}

function gradingStudents(grades) {
	console.error('grades ', grades);
	const result = [];
	for (let i = 0; i < grades.length; i++) {
		console.error('item ', grades[i]);

		const quotient = Math.floor(grades[i] / 5);
		const remainder = grades[i] % 5;
		let actual = remainder >= 3 ? (quotient + 1) * 5 : grades[i];
		if (grades[i] < 38) actual = grades[i];
		console.error('quotient ', quotient, ' remainder ', remainder, ' actual ', actual);
		result[i] = actual;
	}
	return result;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;
	const n = parseInt(readLine(), 10);

	const grades = [];

	for (let gradesItr = 0; gradesItr < n; gradesItr++) {
		const gradesItem = parseInt(readLine(), 10);
		grades.push(gradesItem);
	}

	const result = gradingStudents(grades);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
