//

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	// console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function handleTest(a) {
	const all = [];

	function next(currentNumber) {
		// console.log('next; currentNumber ', currentNumber);
		if (currentNumber === 1) {
			return 1;
		}
		const str = currentNumber.toString();

		let total = 0;
		for (let i = 0; i < str.length; i++) {
			total += str[i] ** 2;
		}
		// console.log('next; currentNumber ', currentNumber, ' total ', total);

		if (all.find(item => item === total)) {
			return 0;
		}
		all.push(total);
		return total;
	}

	let current = parseInt(a, 10);
	for (let i = 0; i < 1000000; i++) {
		const j = next(current);
		if (j === 0) {
			return false;
		}
		if (j === 1) {
			return true;
		}
		current = j;
	}

	return false;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const result = [];

	const n = parseInt(readLine(), 10);
	// prettier-ignore
	const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));
	for (let i = 0; i < a.length; i++) {
		result.push(handleTest(a[i]) ? '1' : '0');
	}

	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
