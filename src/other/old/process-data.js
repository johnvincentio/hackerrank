function processData(input) {
	console.log(`>>> input :${input}:`);
	const parts = input.split(' ');
	console.log(`parts :${parts}:`);
	const tests = parts[0];
	for (let j = 1; j <= tests; j++) {
		const item = parts[j];
		let str1 = '';
		let str2 = '';
		for (let i = 0; i < item.length; i++) {
			if (i % 2 === 0) str1 += item[i];
			else str2 += item[i];
		}
		console.log(`${str1} ${str2}`);
	}
}
