//

/*

https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?h_r=next-challenge&h_v=zen

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function breakingRecords(scores) {
	let brokeLowest = 0;
	let brokeHighest = 0;
	let lowestScore = scores[0];
	let highestScore = scores[0];
	for (let idx = 0; idx < scores.length; idx++) {
		if (scores[idx] < lowestScore) {
			lowestScore = scores[idx];
			brokeLowest++;
		}
		if (scores[idx] > highestScore) {
			highestScore = scores[idx];
			brokeHighest++;
		}
	}
	return [brokeHighest, brokeLowest];
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const n = parseInt(readLine(), 10);

	const scores = readLine()
		.split(' ')
		.map(scoresTemp => parseInt(scoresTemp, 10));

	const result = breakingRecords(scores);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
