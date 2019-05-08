/*
countLetters(string)

countLetters("aaa") -> "a3"
countLetters("aabbbcc") -> "a2b3c2"
countLetters("aaab") -> "a3b"
*/

function countLetters(str) {
	const arr = str.split('');
	let count = 1;
	let result = '';
	for (let idx = 0; idx < arr.length; idx++) {
		if (arr[idx] === arr[idx + 1]) {
			count++;
		}
		else {
			result += `${arr[idx]}${count > 1 ? count : ''}`;
			count = 1;
		}
	}
	return result;
}

console.log(countLetters('') === '');
console.log(countLetters('a') === 'a');
console.log(countLetters('aaa') === 'a3');
console.log(countLetters('ab') === 'ab');
console.log(countLetters('abc') === 'abc');
console.log(countLetters('aba') === 'aba');
console.log(countLetters('abb') === 'ab2');
console.log(countLetters('aabbbcc') === 'a2b3c2');
console.log(countLetters('aabbc') === 'a2b2c');
