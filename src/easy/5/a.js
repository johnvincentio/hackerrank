//

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function miniMaxSum(arr) {
	let lowest = Number.MAX_SAFE_INTEGER;
	let highest = 1;
	let total = 0;

	for (let i = 0; i < 5; i++) {
		total += arr[i];
		if (arr[i] < lowest) {
			lowest = arr[i];
		}
		if (arr[i] > highest) {
			highest = arr[i];
		}
	}
	// console.error('total ', total, ' lowest ', lowest, ' highest ', highest);
	return `${total - highest} ${total - lowest}`;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	// prettier-ignore
	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
	return miniMaxSum(arr);
};

module.exports = convert;
