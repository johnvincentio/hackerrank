//

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function handleTest(line) {
	const parts = line.split(';');

	const URL1 = new URL(decodeURIComponent(parts[0].trim()));
	const URL2 = new URL(decodeURIComponent(parts[1].trim()));
	// console.log('URL1 ', URL1);
	// console.log('URL2 ', URL2);

	const port1 = URL1.port.trim().length === 0 ? '80' : URL1.port.trim();
	const port2 = URL2.port.trim().length === 0 ? '80' : URL2.port.trim();
	// console.log('port1 ', port1, ' port2 ', port2);
	if (port1 !== port2) {
		return false;
	}

	if (URL1.protocol.toLowerCase() !== URL2.protocol.toLowerCase()) {
		return false;
	}

	if (URL1.hostname.toLowerCase() !== URL2.hostname.toLowerCase()) {
		return false;
	}

	if (URL1.pathname !== URL2.pathname) {
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
