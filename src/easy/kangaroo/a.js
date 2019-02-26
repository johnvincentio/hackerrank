//

/*
https://www.hackerrank.com/challenges/kangaroo/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function kangaroo(x1, v1, x2, v2) {
	let apart = Math.abs(x1 - x2);
	let pos1 = x1 + v1;
	let pos2 = x2 + v2;
	while (pos1 !== pos2) {
		const distance = Math.abs(pos1 - pos2);
		if (distance >= apart) {
			return 'NO';
		}
		apart = distance;
		pos1 += v1;
		pos2 += v2;
	}
	return 'YES';
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const x1V1X2V2 = readLine().split(' ');
	const x1 = parseInt(x1V1X2V2[0], 10);
	const v1 = parseInt(x1V1X2V2[1], 10);
	const x2 = parseInt(x1V1X2V2[2], 10);
	const v2 = parseInt(x1V1X2V2[3], 10);

	const result = kangaroo(x1, v1, x2, v2);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
