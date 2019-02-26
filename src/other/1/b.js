//

function sides(literals, ...expressions) {
	console.error('literals ', literals, ' expressions ', expressions);
	const area = expressions[0];
	const perimeter = expressions[1];
	console.error('area ', area, ' perimeter ', perimeter);
	const tmp = Math.sqrt(perimeter ** 2 - 16 * area);
	const arr = [(perimeter + tmp) / 4, (perimeter - tmp) / 4];
	console.error('arr ', arr);
	return arr.sort();
}

function main() {
	let s1 = 10;
	let s2 = 14;

	[s1, s2] = [s1, s2].sort();

	const [x, y] = sides`The area is: ${s1 * s2}.\nThe perimeter is: ${2 * (s1 + s2)}.`;

	console.log(s1 === x ? s1 : -1);
	console.log(s2 === y ? s2 : -1);
}

main();
