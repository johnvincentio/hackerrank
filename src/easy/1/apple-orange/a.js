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

function countApplesAndOranges(s, t, a, b, apples, oranges) {
	let applesLandedOnHouse = 0;
	let orangesLandedOnHouse = 0;
	for (let i = 0; i < apples.length; i++) {
		const landed = a + apples[i];
		if (landed >= s && landed <= t) applesLandedOnHouse++;
	}
	for (let i = 0; i < oranges.length; i++) {
		const landed = b + oranges[i];
		if (landed >= s && landed <= t) orangesLandedOnHouse++;
	}
	return [applesLandedOnHouse, orangesLandedOnHouse];
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const st = readLine().split(' ');
	const s = parseInt(st[0], 10); // starting point of Sam's house
	const t = parseInt(st[1], 10); // ending point of Sam's house

	const ab = readLine().split(' ');
	const a = parseInt(ab[0], 10); // location of the Apple tree
	const b = parseInt(ab[1], 10); // location of the Orange tree

	const mn = readLine().split(' ');
	const m = parseInt(mn[0], 10); // number of apples
	const n = parseInt(mn[1], 10); // number of oranges

	const apples = readLine()
		.split(' ')
		.map(applesTemp => parseInt(applesTemp, 10)); // distances at which each apple falls from the tree

	const oranges = readLine()
		.split(' ')
		.map(orangesTemp => parseInt(orangesTemp, 10)); // distances at which each orange falls from the tree

	const result = countApplesAndOranges(s, t, a, b, apples, oranges);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
