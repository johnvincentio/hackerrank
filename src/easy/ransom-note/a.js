
/*
https://www.hackerrank.com/challenges/ctci-ransom-note/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=dictionaries-hashmaps

Hash Tables: Ransom Note
*/

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

let inputString = '';
let currentLine = 0;

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function checkMagazine(magazine, note) {
	for (let i = 0; i < note.length; i++) {
		const idx = magazine.findIndex(item => item === note[i]);
		if (idx < 0) {
			return false;
		}
		magazine[idx] = '';
	}
	return true;
}

function main(input) {
	currentLine = 0;
	inputString = input;

	const mn = readLine().split(' ');

	const m = parseInt(mn[0], 10);

	const n = parseInt(mn[1], 10);

	const magazine = readLine().split(' ');

	const note = readLine().split(' ');

	const result = checkMagazine(magazine, note) ? 'Yes' : 'No';
	console.log(result);
	return result;
}

module.exports = {
	main
};
