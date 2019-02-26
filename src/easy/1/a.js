//

/* eslint-disable no-plusplus */

let currentLine = 0;
const inputString = ['5', '1000000001 1000000002 1000000003 1000000004 1000000005'];

function readLine() {
	return inputString[currentLine++];
}

// Complete the aVeryBigSum function below.
function aVeryBigSum(ar) {
	let total = 0;
	for (let i = 0; i < ar.length; i++) {
		total += ar[i];
	}
	return total;
}

function main() {
	const arCount = parseInt(readLine(), 10);
	console.log('arCount ', arCount);

	// prettier-ignore
	const ar = readLine().split(' ').map(arTemp => parseInt(arTemp, 10));

	const result = aVeryBigSum(ar);
	console.log('result ', result);
}

main();
