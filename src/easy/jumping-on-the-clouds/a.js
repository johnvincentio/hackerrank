
/*
https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

Jumping on the Clouds
*/

/* eslint-disable no-plusplus */

const convert = {};

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function jumpingOnClouds(c) {
	// console.error('c ', c);
	const end = c.length - 1;
	let jumps = 0;
	let pos = 0;
	while (pos < end) {
		console.log('pos ', pos, ' end ', end);
		if (pos + 2 <= end && c[pos + 2] === 0) {
			jumps++;
			pos += 2;
		}
		else if (pos + 1 <= end && c[pos + 1] === 0) {
			jumps++;
			pos += 1;
		}
		else {
			jumps = 999;
		}
	}
	return jumps;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const n = parseInt(readLine(), 10);

	const c = readLine().split(' ').map(cTemp => parseInt(cTemp, 10));

	const result = jumpingOnClouds(c);

	console.log(`result ${result}\n`);
	return result;
}

module.exports = convert;
