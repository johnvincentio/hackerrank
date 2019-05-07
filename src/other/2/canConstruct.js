/*
canConstruct(stringToConstruct, magazineLetters)
canConstruct("a", "b") -> false
canConstruct("aa", "ab") -> false
canConstruct("aa", "aab") -> true

break up;
[n], [n],

obj1 = {a: n, b: n1, .....}
obj2 = {}
*/

function splitter(str) {
	const obj = {};
	const arr = str.split('');
	// console.log('arr ', arr);
	arr.forEach(letter => {
		// console.log('letter ', letter);
		// console.log('obj ', obj);
		// console.log('obj[letter] ', obj[letter]);
		if (obj[letter]) {
			obj[letter]++;
		} else {
			obj[letter] = 1;
		}
	});
	return obj;
}

function canConstruct(stringToConstruct, magazineLetters) {

	const obj1 = splitter(stringToConstruct);
	// console.log('obj1 ', obj1);
	const obj2 = splitter(magazineLetters);
	// console.log('obj2 ', obj2);

	for (letter in obj1) {
		// console.log('letter ', letter);
		// console.log('obj1[letter] ', obj1[letter]);
		// console.log('obj2[letter] ', obj2[letter]);
		if (!obj2[letter]) {
			return false;
		}
		if (obj2[letter] < obj1[letter]) {
			return false;
		}
	}
	return true;
}

console.log('canConstruct("a", "b") ', canConstruct('a', 'b'));
console.log('canConstruct("aa", "ab") ', canConstruct('aa', 'ab'));
console.log('canConstruct("aa", "aab") ', canConstruct('aa', 'aab'));

console.log('canConstruct("", "aa") ', canConstruct('', 'aa'));

console.log('canConstruct("aa", "") ', canConstruct('aa', ''));
