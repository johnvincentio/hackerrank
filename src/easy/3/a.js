//

/* eslint-disable no-plusplus */

let currentLine = 0;
const inputString1 = ['6', '-4 3 -9 0 4 1'];

const inputString = inputString1;

function readLine() {
	return inputString[currentLine++];
}

// Complete the plusMinus function below.
function plusMinus(arr) {
	let plus = 0;
	let minus = 0;
	let zero = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < 0) {
			minus++;
		} else if (arr[i] > 0) {
			plus++;
		} else {
			zero++;
		}
	}
	console.log((plus / arr.length).toFixed(6));
	console.log((minus / arr.length).toFixed(6));
	console.log((zero / arr.length).toFixed(6));
}

function main() {
	const n = parseInt(readLine(), 10);

	const arr = readLine()
		.split(' ')
		.map(arrTemp => parseInt(arrTemp, 10));

	plusMinus(arr);
}

main();
