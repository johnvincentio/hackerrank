//

const fs = require('fs');

function convert(filename) {
	const data = fs.readFileSync(`${filename}.data`).toString();

	const contents = data
		.trim()
		.split('\n')
		.map(str => str.trim());
	// console.error('data ', data);
	console.log('contents.length ', contents.length);

	const logger = fs.createWriteStream(`${filename}.txt`, {
		flags: 'w'
	});

	contents.forEach(line => {
		logger.write(`${line}\n`);
	});

	logger.end();
}

convert('input17');
