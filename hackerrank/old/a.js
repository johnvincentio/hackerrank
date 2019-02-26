/*
www.hackerrank.com

*/

const assert = require('assert');

function fizzBuzz(num) {
	for (let i = 1; i <= num; i++) {
		if (i % 3 === 0 && i % 5 === 0) {
			console.log('FizzBuzz');
		} else if (i % 3 === 0) {
			console.log('Fizz');
		} else if (i % 5 === 0) {
			console.log('Buzz');
		} else console.log(i);
	}
}

function modulo(m, n) {
	const res = m % n;
	console.log(`m ${  m  } n ${  n  } res ${  res}`);
}

// modulo(4,2);
// modulo(5,2);
// modulo(17,3);
// modulo(32,7);
// modulo(32,3);
// modulo(32,7);
// modulo(32,7);

fizzBuzz(15);
