//

/*

https://www.hackerrank.com/challenges/bon-appetit/problem?h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen&h_r=next-challenge&h_v=zen

bon-appetit

*/

/* eslint-disable no-plusplus */

const convert = {};

let currentLine = 0;
let inputString = '';

function readLine() {
	console.error('inputString[currentLine] ', inputString[currentLine]);
	return inputString[currentLine++];
}

function bonAppetit(bill, k, b) {
	console.error('bill ', bill, ' k ', k, ' b ', b);
	const fullBill = bill.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
	const annaBill = (fullBill - bill[k]) / 2;
	console.error('fullBill ', fullBill, ' annaBill ', annaBill);
	const refund = b - annaBill;
	return refund === 0 ? 'Bon Appetit' : refund;
}

/*
Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally.

Brian wants to order something that Anna is allergic to though, and they agree 
	that Anna won't pay for that item.

Brian gets the check and calculates Anna's portion.

You must determine if his calculation is correct.
*/

convert.main = function main(input) {
	currentLine = 0;
	inputString = input;

	// prettier-ignore
	const nk = readLine().replace(/\s+$/g, '').split(' ');
	const n = parseInt(nk[0], 10);
	const k = parseInt(nk[1], 10);
	// prettier-ignore
	const bill = readLine().replace(/\s+$/g, '').split(' ').map(billTemp => parseInt(billTemp, 10));
	// prettier-ignore
	const b = parseInt(readLine().trim(), 10);
	const result = bonAppetit(bill, k, b);

	console.log(`result ${result}\n`);
	return result;
};

module.exports = convert;
