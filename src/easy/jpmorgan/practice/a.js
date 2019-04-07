//

/* eslint-disable no-plusplus */

process.stdin.resume();
process.stdin.setEncoding('utf8');

let stdin = '';
process.stdin
	.on('data', function(chunk) {
		stdin += chunk;
	})
	.on('end', function() {
		const lines = stdin.trim().split('\n');
		for (let i = 0; i < lines.length; i++) {
			// process.stdout.write(`test ${i} \n`);
			// console.log('i ', i, ' lines[i] ', lines[i]);
			const num = parseInt(lines[i], 10);
			// console.log('num ', num, ' typeof(num) ', typeof(num))
			const num2 = num * num;
			// console.log('num2 ', num2);
			process.stdout.write(num2.toString());
		}
	});
