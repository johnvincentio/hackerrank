//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe.only('test-2', () => {
	it('1', () => {
		const input = [
			'1', // test cases

			'3 3', // number of levels, number of enemies at each level

			'5 8 7', // Power of enemy, at the level zero
			'3 6 9',
			'2 3 8',

			'2 3 1', // Bullets of enemy, at the level zero
			'4 5 6',
			'2 1 3'
		];
		const result = a.main(input, [true]);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(6);
	});
});

/*
1 3 3 5 8 7 3 6 9 2 3 8 2 3 1 4 5 6 2 1 3 
Answer is 6 
Explanation Enemy_power_value(EPV) - 
from the first row select the minimum one that is 5. 
store the corresponding bullet value(temp_bullet) that is 2.

Goto next level (3,6,9). 
For each of them calculate the minimum bullet value (5+3-2, 5+6-2, 5+9-2) which is equal to (6,9,12)

5+3-2 ==> first number(5) represent previous level minimum bullet value, 
	second number(3) represent power value in the current level, 
	third number(2) represent the bullet value of previous level. 

Incase second number is lesser than or equal to third number then consider the first number as minimum bullet value.

pick the minimum in (6,9,12) which is 6. So 6 is the Minimum bullet value till second level.

Goto next level (2,3,8) - For each of them calculate the minimum bullet value (6+(2-4), 6+(3-4), 6+8-4) which is equal to (6,6,12). Ignore the parenthesised portion (2-4) and (3-4) to calculate the final value.

Then pick the minimum of (6,6,12) which is 6. Since we have only 3 level 6 is the final answer. Hope this helps.
*/
