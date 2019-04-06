//

/*

https://www.hackerrank.com/challenges/picking-numbers/problem?h_r=next-challenge&h_v=zen

picking-numbers

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function handleTest(line) {
	// console.log('line ', line);
	const parts = line.split(';');
	// console.log('parts ', parts);

	const URL1 = new URL(parts[0].trim());
	const URL2 = new URL(parts[1].trim());
	// console.log('URL1 ', URL1);
	// console.log('URL2 ', URL2);

	const port1 = URL1.port.trim().length === 0 ? '80' : URL1.port.trim();
	const port2 = URL2.port.trim().length === 0 ? '80' : URL2.port.trim();
	console.log('port1 ', port1, ' port2 ', port2);
	if (port1 !== port2) {
		return false;
	}

	if (URL1.protocol.toLowerCase() !== URL2.protocol.toLowerCase()) {
		return false;
	}

	return true;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const result = [];

	const n = parseInt(readLine(), 10);
	// prettier-ignore
	const a = readLine().split(' ');

	for (let i = 0; i < a.length; i++) {
		result.push(handleTest(a[i]));
	}

	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;

// function parser(url) {
// 	const urlObj = new URL(url);
// 	console.log('(1) urlObj ', urlObj);
// 	console.log();
// 	console.log('parts.port :', urlObj.port, ':');
// 	console.log('parts.port.length ', urlObj.port.length);
// 	if (urlObj.port === undefined || urlObj.port.length === 0) {
// 		console.log('change port ');
// 		urlObj.port = '80';
// 	}
// 	console.log('(2) urlObj ', urlObj);
// 	return urlObj;
// }
