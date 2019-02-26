//

/* eslint-disable no-plusplus */

let currentLine = 0;
const inputString1 = ['1'];

const inputString = inputString1;

function readLine() {
	return inputString[currentLine++];
}

// Complete the staircase function below.
function staircase(n) {
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n - i - 1; j++) {
			process.stdout.write(' ');
		}
		for (let j = n - i - 1; j < n; j++) {
			process.stdout.write('#');
		}
		process.stdout.write('\n');
	}
}

function main() {
	const n = parseInt(readLine(), 10);
	console.error('n ', n);
	staircase(n);
}
main();
