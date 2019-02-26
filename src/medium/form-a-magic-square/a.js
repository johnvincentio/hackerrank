//

/*

https://www.hackerrank.com/challenges/magic-square-forming/problem

form-a-magic-square

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

convert.create = function create() {
	const magic = [];
	const square = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
	// console.log('square ', square);
	for (let pos00 = 1; pos00 <= 9; pos00++) {
		for (let pos01 = 1; pos01 <= 9; pos01++) {
			if (pos01 === pos00) continue;

			for (let pos02 = 1; pos02 <= 9; pos02++) {
				if (pos02 === pos00) continue;
				if (pos02 === pos01) continue;

				for (let pos10 = 1; pos10 <= 9; pos10++) {
					if (pos10 === pos00) continue;
					if (pos10 === pos01) continue;
					if (pos10 === pos02) continue;

					for (let pos11 = 1; pos11 <= 9; pos11++) {
						if (pos11 === pos00) continue;
						if (pos11 === pos01) continue;
						if (pos11 === pos02) continue;
						if (pos11 === pos10) continue;

						for (let pos12 = 1; pos12 <= 9; pos12++) {
							if (pos12 === pos00) continue;
							if (pos12 === pos01) continue;
							if (pos12 === pos02) continue;
							if (pos12 === pos10) continue;
							if (pos12 === pos11) continue;

							for (let pos20 = 1; pos20 <= 9; pos20++) {
								if (pos20 === pos00) continue;
								if (pos20 === pos01) continue;
								if (pos20 === pos02) continue;
								if (pos20 === pos10) continue;
								if (pos20 === pos11) continue;
								if (pos20 === pos12) continue;

								for (let pos21 = 1; pos21 <= 9; pos21++) {
									if (pos21 === pos00) continue;
									if (pos21 === pos01) continue;
									if (pos21 === pos02) continue;
									if (pos21 === pos10) continue;
									if (pos21 === pos11) continue;
									if (pos21 === pos12) continue;
									if (pos21 === pos20) continue;

									for (let pos22 = 1; pos22 <= 9; pos22++) {
										if (pos22 === pos00) continue;
										if (pos22 === pos01) continue;
										if (pos22 === pos02) continue;
										if (pos22 === pos10) continue;
										if (pos22 === pos11) continue;
										if (pos22 === pos12) continue;
										if (pos22 === pos20) continue;
										if (pos22 === pos21) continue;

										if (pos00 + pos01 + pos02 !== 15) continue;
										if (pos10 + pos11 + pos12 !== 15) continue;
										if (pos20 + pos21 + pos22 !== 15) continue;

										if (pos00 + pos10 + pos20 !== 15) continue;
										if (pos01 + pos11 + pos21 !== 15) continue;
										if (pos02 + pos12 + pos22 !== 15) continue;

										if (pos00 + pos11 + pos22 !== 15) continue;
										if (pos02 + pos11 + pos20 !== 15) continue;

										magic.push([[pos00, pos01, pos02], [pos10, pos11, pos12], [pos20, pos21, pos22]]);
										// console.log('found a magic square');
									}
								}
							}
						}
					}
				}
			}
		}
	}
	return magic;
};

function formingMagicSquare(s) {
	const size = s.length;
	const magicConstant = size * ((size ** 2 + 1) / 2);
	// console.error('size ', size, ' magicConstant ', magicConstant);
	const magicSquares = convert.create();
	let lowestCost = Number.MAX_SAFE_INTEGER;
	for (let i = 0; i < magicSquares.length; i++) {
		let total = 0;
		for (let x = 0; x < 3; x++) {
			for (let y = 0; y < 3; y++) {
				total += Math.abs(magicSquares[i][x][y] - s[x][y]);
			}
		}
		if (total < lowestCost) lowestCost = total;
	}
	return lowestCost;
}

/*
A magic square to be an nxn matrix of distinct positive integers from 1 to n**2
	where the sum of any row, column, or diagonal of length n 
		is always equal to the same number: the magic constant.

Print an integer denoting the minimum cost of turning matrix s into a magic square.

*/

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const s = Array(3);
	for (let i = 0; i < 3; i++) {
		// prettier-ignore
		s[i] = readLine().split(' ').map(sTemp => parseInt(sTemp, 10));
	}
	const result = formingMagicSquare(s);
	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
