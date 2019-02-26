//

/*
https://www.hackerrank.com/challenges/a-super-hero/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

Input Format

First line of input contains a single integer T denoting the number of test cases. 

First line of each test case contains two space separated integers:
	N = the number of levels,
	M = number of enemies at each level respectively. 

Each of next N lines of a test case contain:
	M space separated integers, where jth integer in the ith line denotes the power P of jth enemy on the ith level. 

Each of the next N lines of a test case contains:
	M space separated integers, where jth integer in the ith line denotes the number of bullets B jth enemy of ith level has.

Constraints 
1 <= T <= 100
1 <= N <= 100
1 <= M <= 5 * 10**5
1 <= P, B <= 1000

For each test file, sum of N x M over all the test cases does not exceed 5*10**5
*/

/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

const convert = {};

let currentLine = 0;
let inputString = '';

let POWER = [];
let BULLETS = [];
let numberOfLevels = 0;
let numberOfEnemies = 0;
let minBulletsUsed = Number.MAX_SAFE_INTEGER;

function readLine() {
	return inputString[currentLine++];
}

function superHero(power, bullets) {
	// console.error('--- superHero; power ', power, ' bullets ', bullets);

	POWER = power;
	BULLETS = bullets;
	numberOfLevels = power.length;
	numberOfEnemies = power[0].length;
	minBulletsUsed = Number.MAX_SAFE_INTEGER;
	// console.error('numberOfLevels ', numberOfLevels, ' numberOfEnemies ', numberOfEnemies);

	handleLevel(0, 0, 0);

	console.error('minBulletsUsed ', minBulletsUsed);

	return minBulletsUsed;
}

function handleLevel(bulletsUsed, bulletsCaptured, level) {
	if (level >= numberOfLevels) {
		// console.error('max level found; bulletsUsed ', bulletsUsed, ' minBulletsUsed ', minBulletsUsed);
		if (bulletsUsed < minBulletsUsed) {
			minBulletsUsed = bulletsUsed;
			// console.error('\nnew minBulletsUsed ', minBulletsUsed, '\n');
		}
		return;
	}

	// if (bulletsUsed >= minBulletsUsed) {
	// 	console.error('\bulletsUsed ', bulletsUsed, ' exceeded minBulletsUsed ', minBulletsUsed, '\n');
	// 	return;
	// }

	for (let enemy = 0; enemy < numberOfEnemies; enemy++) {
		let usedNow = bulletsUsed;
		if (POWER[level][enemy] > bulletsCaptured) {
			usedNow = bulletsUsed + POWER[level][enemy] - bulletsCaptured;
		}
		const capturedNow = BULLETS[level][enemy];

		// prettier-ignore
		// console.error('handleLevel; level ', level, ' enemy ', enemy,
		// 	' power ', POWER[level][enemy], ' bullets ', BULLETS[level][enemy],
		// 	' bulletsUsed ', bulletsUsed, ' bulletsCaptured ', bulletsCaptured,
		// 	' usedNow ', usedNow, ' capturedNow ', capturedNow,
		// 	' minBulletsUsed ', minBulletsUsed);

		if (usedNow >= minBulletsUsed) {
			// console.error('\nusedNow ', usedNow, ' exceeded minBulletsUsed ', minBulletsUsed, '\n');
		} else {
			handleLevel(usedNow, capturedNow, level + 1);
		}
	}
}

/*
handle main
*/
convert.main = function main(input, perform) {
	// console.log('--- main; input ', input);
	const jv = [];
	currentLine = 0;
	inputString = input;

	const t = parseInt(readLine(), 10);
	console.log('test cases ', t);

	for (let tItr = 0; tItr < t; tItr++) {
		const nm = readLine().split(' ');
		const n = parseInt(nm[0], 10);
		const m = parseInt(nm[1], 10);
		console.log('test case ', tItr, ' number of levels ', n, ' number of enemies', m);

		const power = Array(n);
		for (let powerRowItr = 0; powerRowItr < n; powerRowItr++) {
			// prettier-ignore
			power[powerRowItr] = readLine().split(' ').map(powerTemp => parseInt(powerTemp, 10));
		}

		const bullets = Array(n);
		for (let bulletsRowItr = 0; bulletsRowItr < n; bulletsRowItr++) {
			// prettier-ignore
			bullets[bulletsRowItr] = readLine().split(' ').map(bulletsTemp => parseInt(bulletsTemp, 10));
		}

		if (perform[tItr]) {
			const result = superHero(power, bullets);
			console.log(`result ${result}\n`);
			jv.push(result);
		}
	}
	return jv;
};

module.exports = convert;
