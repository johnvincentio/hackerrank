//

/*
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


for each row
	for each column

	endfor

endfor
*/

/* eslint-disable no-plusplus */
/* eslint-disable no-use-before-define */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	return inputString[currentLine++];
}

function handleLevel(scenarios, arr, level, power, bullets) {
	const numberOfLevels = power.length;
	const numberOfEnemies = power[0].length;
	// prettier-ignore
	// console.error('--- handleLevel; arr ', arr, ' level ', level, ' numberOfLevels ', numberOfLevels, ' numberOfEnemies ', numberOfEnemies);
	if (level >= numberOfLevels) {
		// console.error('max levels found; arr ', arr);
		console.error('scenario found ', arr.slice(0));
		scenarios.push({ path: arr.slice(0) });
		return;
	}
	for (let enemy = 0; enemy < numberOfEnemies; enemy++) {
		arr[level] = {
			enemy,
			power: power[level][enemy],
			bullets: bullets[level][enemy]
		};
		handleLevel(scenarios, arr, level + 1, power, bullets);
	}
}

function superHero(power, bullets) {
	// console.error('--- superHero; power ', power, ' bullets ', bullets);

	const numberOfLevels = power.length;
	const numberOfEnemies = power[0].length;
	// console.error('numberOfLevels ', numberOfLevels, ' numberOfEnemies ', numberOfEnemies);

	// const scenarios = Array(numberOfLevels * numberOfEnemies);
	const scenarios = [];

	const arr = Array(numberOfLevels);
	for (let i = 0; i < numberOfLevels; i++) {
		arr[i] = -1;
	}

	const level = 0;
	handleLevel(scenarios, arr, level, power, bullets);

	let minBullettsUsed = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < scenarios.length; i++) {
		const { path } = scenarios[i];
		let bulletsCaptured = 0;
		let bulletsUsed = 0;
		// console.error('scenarios #', i, ' path ', path);

		for (let j = 0; j < path.length; j++) {
			// console.error('i ', i, ' j ', j, ' path ', path, ' power ', path[j].power, ' bulletts ', path[j].bullets);
			if (path[j].power > bulletsCaptured) {
				bulletsUsed += path[j].power - bulletsCaptured;
			}
			bulletsCaptured = path[j].bullets;
		}
		if (bulletsUsed < minBullettsUsed) minBullettsUsed = bulletsUsed;
		scenarios[i].bullets = { used: bulletsUsed, captured: bulletsCaptured };
	}

	for (let i = 0; i < scenarios.length; i++) {
		const { path } = scenarios[i];
		// console.error('scenarios #', i, ' bullets ', scenarios[i].bullets, ' path ', path);
	}
	console.error('minBullettsUsed ', minBullettsUsed);

	return minBullettsUsed;
}

convert.main = function main(input) {
	// console.log('--- main; input ', input);
	currentLine = 0;
	inputString = input;

	const t = parseInt(readLine(), 10);
	console.log('t ', t);

	const jv = [];

	for (let tItr = 0; tItr < t; tItr++) {
		console.log('tItr ', tItr);
		const nm = readLine().split(' ');
		// console.log('nm ', nm);

		const n = parseInt(nm[0], 10);
		console.log('n ', n);

		const m = parseInt(nm[1], 10);
		console.log('m ', m);

		const power = Array(n);

		for (let powerRowItr = 0; powerRowItr < n; powerRowItr++) {
			power[powerRowItr] = readLine()
				.split(' ')
				.map(powerTemp => parseInt(powerTemp, 10));
		}

		const bullets = Array(n);

		for (let bulletsRowItr = 0; bulletsRowItr < n; bulletsRowItr++) {
			bullets[bulletsRowItr] = readLine()
				.split(' ')
				.map(bulletsTemp => parseInt(bulletsTemp, 10));
		}

		const result = superHero(power, bullets);
		jv.push(result);

		console.log(`${result}\n`);
	}
	return jv;
};

module.exports = convert;

/*
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
*/

/*
function superHeroNOP(power, bullets) {
	console.error('--- superHero; power ', power, ' bullets ', bullets);

	const numberOfLevels = power.length;
	const numberOfEnemies = power[0].length;
	console.error('numberOfLevels ', numberOfLevels, ' numberOfEnemies ', numberOfEnemies);

	// find minimum number of bullets required for the final level
	const minNumberOfBulletsRequired = minArray(power[numberOfLevels - 1]);
	console.error('minNumberOfBulletsRequired ', minNumberOfBulletsRequired);

	for (let i = numberOfLevels - 2; i >= 0; i--) {}
	return 20;
}

function superHeroNO(power, bullets) {
	console.error('--- superHero; power ', power, ' bullets ', bullets);
	let minBullets = Number.MAX_SAFE_INTEGER;

	for (let i = 0; i < power.length; i++) {
		const bulletCount = 0;
		const capturedCount = 0;
		console.error('i ', i, ' power[i] ', power[i], ' bullets[i] ', bullets[i]);
		for (let j = 0; j < power[i].length; j++) {
			console.error(
				'j ',
				j,
				' bullets of kill = power[i][j] ',
				power[i][j],
				' bullets captured = bullets[i][j] ',
				bullets[i][j]
			);
		}
	}
	minBullets = 20;

	return minBullets;
}
*/

// function minBulletsNeeded()

// put all scenarios into an array of objects
// scenario is an object

// function handleEnemy(scenarios, level, enemy, power) {
// 	const numberOfLevels = power.length;
// 	const numberOfEnemies = power[0].length;
// 	// prettier-ignore
// 	console.error('--- handleEnemy; scenarios ', scenarios, ' level ', level, ' enemy ', enemy, ' numberOfLevels ', numberOfLevels, ' numberOfEnemies ', numberOfEnemies);
// 	arr.push(`enemy=${enemy}`);
// 	handleLevel(scenarios, level + 1, power);
// }

/*
function minArray(arr) {
	let lowest = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < lowest) {
			lowest = arr[i];
		}
	}
	return lowest;
}

function maxArray(arr) {
	let highest = 1;
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > highest) {
			highest = arr[i];
		}
	}
	return highest;
}
*/
