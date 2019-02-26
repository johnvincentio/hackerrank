//

/*

https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem

climbing-the-leaderboard

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function createLeaders(scores) {
	const leaders = [];
	let current = 0;
	let lastScore = -1;
	for (let idx = 0; idx < scores.length; idx++) {
		if (scores[idx] !== lastScore) {
			leaders[current++] = scores[idx];
			lastScore = scores[idx];
		}
	}
	return leaders;
}

function climbingLeaderboard(scores, alice) {
	// console.error('scores ', scores, ' alice ', alice);
	const leaders = createLeaders(scores);
	// console.error('leaders ', leaders);

	const ranks = Array(alice.length);
	for (let i = 0; i < alice.length; i++) {
		ranks[i] = leaders.length + 1;
	}

	let aliceIdx = alice.length - 1;
	for (let j = 0; j < leaders.length; j++) {
		while (aliceIdx > -1 && alice[aliceIdx] >= leaders[j]) {
			ranks[aliceIdx] = j + 1;
			aliceIdx--;
		}
	}
	// console.error('(result) ranks ', ranks);
	return ranks;
}

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const scoresCount = parseInt(readLine(), 10);
	// prettier-ignore
	const scores = readLine().split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

	const aliceCount = parseInt(readLine(), 10);
	// prettier-ignore
	const alice = readLine().split(' ').map(aliceTemp => parseInt(aliceTemp, 10));

	const result = climbingLeaderboard(scores, alice);

	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
