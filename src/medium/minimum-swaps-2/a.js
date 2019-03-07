
/*
https://www.hackerrank.com/challenges/minimum-swaps-2/problem?h_l=interview&playlist_slugs%5B%5D%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D%5B%5D=arrays

Minimum Swaps 2
*/

/* eslint-disable no-plusplus */
/* eslint-disable no-param-reassign */

let inputString = '';
let currentLine = 0;

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function isConsecutive(arr) {
	for (let cnt = 0; cnt < arr.length; cnt++) {
		if (arr[cnt] !== cnt + 1) {
			return false;
		}
	}
	return true;
}

function minimumSwaps(arr) {
	console.log('arr ', arr);
	let moves = 0;
	let pos = 0;
	const end = arr.length - 1;
	while (pos < end) {
		if (pos + 1 === arr[pos]) {
			pos++;
		}
		else {		// perform a swap
			// console.log('>>> before swap ', arr);
			const posValue = arr[pos];
			const swap = posValue - 1;
			const swapValue = arr[swap];
			// console.log('pos ', pos, ' posValue ', posValue, ' swap ', swap, ' swapValue ', swapValue);
			arr[pos] = swapValue;
			arr[swap] = posValue;
			moves++;
			console.log('<<< after swap ', arr);
		}
	}
	return moves;
}

function main(input) {
	currentLine = 0;
	inputString = input;

	const n = parseInt(readLine(), 10);

	const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

	const result = minimumSwaps(arr);

	console.log(`result ${result}\n`);
	return result;
}

module.exports = {
	main
};


/*
1 2 3 4 5 6
------------
3 5 6 2 4 1

1 5 6 2 4 3
1 2 6 5 4 3
1 2 3 5 4 6
1 2 3 4 5 6

1 2 3 4 5 6
------------
3 5 6 2 4 1

3 5 6 4 2 1
3 2 6 4 5 1
1 2 6 4 5 3
1 2 3 4 5 6

1 2 3 4 5 6
------------
3 5 6 2 4 1

6 5 3 2 4 1
1 5 3 2 4 6
1 4 3 2 5 6
1 2 3 4 5 6


*/
