//

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	return inputString[currentLine++];
}

function timeConversion(s) {
	const hour = s.slice(0, 2);
	if (s.slice(8) === 'PM') {
		if (hour === '12') {
			return `12${s.slice(2, 8)}`;
		}
		return 1 * hour + 12 + s.slice(2, 8);
	}
	if (hour === '12') {
		return `00${s.slice(2, 8)}`;
	}
	return s.slice(0, 8);
}

// function timeConversion(s) {
// 	return s.slice(8) === 'PM'
// 		? (1 * s.slice(0, 2) + 12 >= 24 ? '00' : 1 * s.slice(0, 2) + 12) + s.slice(2, 8)
// 		: s.slice(0, 8);
// }
// 	return s.slice(8) === 'PM' ? 1 * s.slice(0, 2) + 12 + s.slice(2, 8) : s.slice(0, 8);

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	const s = readLine();
	return timeConversion(s);
};

module.exports = convert;
