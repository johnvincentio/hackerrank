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
let minBullettsUsed = Number.MAX_SAFE_INTEGER;

function readLine() {
	return inputString[currentLine++];
}

function superHero(power, bullets) {
	// console.error('--- superHero; power ', power, ' bullets ', bullets);

	POWER = power;
	BULLETS = bullets;
	numberOfLevels = power.length;
	numberOfEnemies = power[0].length;
	minBullettsUsed = Number.MAX_SAFE_INTEGER;
	// console.error('numberOfLevels ', numberOfLevels, ' numberOfEnemies ', numberOfEnemies);

	const arr = Array(numberOfLevels);
	for (let i = 0; i < numberOfLevels; i++) {
		arr[i] = -1;
	}
	const level = 0;
	handleLevel(arr, level);

	console.error('minBullettsUsed ', minBullettsUsed);

	return minBullettsUsed;
}

function handleLevel(arr, level) {
	// prettier-ignore
	// console.error('--- handleLevel; arr ', arr, ' level ', level, ' numberOfLevels ', numberOfLevels, ' numberOfEnemies ', numberOfEnemies);
	if (level >= numberOfLevels) {
		handleBulletCount(arr);
		return;
	}
	for (let enemy = 0; enemy < numberOfEnemies; enemy++) {
		arr[level] = enemy;
		handleLevel(arr, level + 1);
	}
}

function handleBulletCount(path) {
	// console.error('handleBulletCount; path ', path);

	let bulletsCaptured = 0;
	let bulletsUsed = 0;

	for (let level = 0; level < path.length; level++) {
		const enemy = path[level];

		// prettier-ignore
		// console.error('level ',	level, ' enemy ', enemy, ' power ', POWER[level][enemy], ' bulletts ', BULLETS[level][enemy]);

		if (POWER[level][enemy] > bulletsCaptured) {
			bulletsUsed += POWER[level][enemy] - bulletsCaptured;
		}
		bulletsCaptured = BULLETS[level][enemy];
	}

	// console.error('bulletsUsed ', bulletsUsed, ' path ', path);
	if (bulletsUsed < minBullettsUsed) {
		minBullettsUsed = bulletsUsed;
		// console.error('new minBullettsUsed ', minBullettsUsed);
	}
}

/*
handle main
*/
convert.main = function main(input) {
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

		const result = superHero(power, bullets);
		jv.push(result);

		console.log(`${result}\n`);
	}
	return jv;
};

module.exports = convert;
