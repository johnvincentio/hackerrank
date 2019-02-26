//

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	return inputString[currentLine++];
}

// Complete the miniMaxSum function below.
function birthdayCakeCandles(arr) {
	let highest = 0;
	let total = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > highest) {
			highest = arr[i];
			total = 1;
		} else if (arr[i] === highest) {
			total += 1;
		}
	}
	return total;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const arCount = parseInt(readLine(), 10);
	// prettier-ignore
	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
	return birthdayCakeCandles(arr);
};

module.exports = convert;
