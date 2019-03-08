//

/*

https://www.hackerrank.com/challenges/migratory-birds/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

migratory-birds

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function migratoryBirds(arr) {
	console.error('arr ', arr);
	const scores = Array(arr.length);
	for (let i = 0; i < arr.length; i++) {
		scores[i] = 0;
	}

	for (let i = 0; i < arr.length; i++) {
		const type = arr[i];
		if (type >= 1 && type <= 5) {
			scores[type - 1]++;
		}
	}
	console.error('scores ', scores);

	let lowestBirdType = 0;
	let highestBirdCount = scores[0];
	for (let i = 0; i < scores.length; i++) {
		if (scores[i] > highestBirdCount) {
			highestBirdCount = scores[i];
			lowestBirdType = i;
		}
	}
	return lowestBirdType + 1;
}

/*
Print the type number of that bird and if two or more types of birds are equally common, 
	choose the type with the smallest ID number.
*/

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const arrCount = parseInt(readLine().trim(), 10);
	const arr = readLine()
		.replace(/\s+$/g, '')
		.split(' ')
		.map(arrTemp => parseInt(arrTemp, 10));

	const result = migratoryBirds(arr);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
