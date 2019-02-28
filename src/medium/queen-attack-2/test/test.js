
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('leftHorizontal', () => {
	it('1', () => {
		const obstacles = [[4, 2]
		];
		const result = a.leftHorizontal(5, 4, 3, obstacles);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[4, 1]
		];
		const result = a.leftHorizontal(5, 4, 3, obstacles);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[1, 1]
		];
		const result = a.leftHorizontal(5, 4, 3, obstacles);
		result.should.equal(2);
	});
});

describe('rightHorizontal', () => {
	it('1', () => {
		const obstacles = [[4, 4]
		];
		const result = a.rightHorizontal(5, 4, 3, obstacles);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[4, 5]
		];
		const result = a.rightHorizontal(5, 4, 3, obstacles);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[1, 1]
		];
		const result = a.rightHorizontal(5, 4, 3, obstacles);
		result.should.equal(2);
	});
});

describe('upVertical', () => {
	it('1', () => {
		const obstacles = [[3, 3]
		];
		const result = a.upVertical(5, 2, 3, obstacles);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[5, 3]
		];
		const result = a.upVertical(5, 2, 3, obstacles);
		result.should.equal(2);
	});
	it('3', () => {
		const obstacles = [[1, 1]
		];
		const result = a.upVertical(5, 2, 3, obstacles);
		result.should.equal(3);
	});
});

describe('downVertical', () => {
	it('1', () => {
		const obstacles = [[3, 3]
		];
		const result = a.downVertical(5, 4, 3, obstacles);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[2, 3]
		];
		const result = a.downVertical(5, 4, 3, obstacles);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[1, 1]
		];
		const result = a.downVertical(5, 4, 3, obstacles);
		result.should.equal(3);
	});
});

describe('upLeftDiagonal', () => {
	it('1', () => {
		const obstacles = [[3, 3]
		];
		const result = a.upLeftDiagonal(5, 2, 4, obstacles);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[4, 2]
		];
		const result = a.upLeftDiagonal(5, 2, 4, obstacles);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[5, 1]
		];
		const result = a.upLeftDiagonal(5, 2, 4, obstacles);
		result.should.equal(2);
	});
	it('4', () => {
		const obstacles = [[1, 1]
		];
		const result = a.upLeftDiagonal(5, 2, 4, obstacles);
		result.should.equal(3);
	});
});

describe('downLeftDiagonal', () => {
	it('1', () => {
		const obstacles = [[3, 3]
		];
		const result = a.downLeftDiagonal(5, 4, 2, obstacles);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[2, 4]
		];
		const result = a.downLeftDiagonal(5, 4, 2, obstacles);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[1, 5]
		];
		const result = a.downLeftDiagonal(5, 4, 2, obstacles);
		result.should.equal(2);
	});
	it('4', () => {
		const obstacles = [[1, 1]
		];
		const result = a.downLeftDiagonal(5, 4, 2, obstacles);
		result.should.equal(3);
	});
});

describe.only('test', () => {
	it('1', () => {
		const input = [
			'4 0',
			'4 4'
		];
		const result = a.main(input);
		result.should.equal(9);
	});

	it('2', () => {
		const input = [
			'5 3',
			'4 3',
			'5 5',
			'4 2',
			'2 3'
		];
		const result = a.main(input);
		result.should.equal(10);
	});

	it('2', () => {
		const input = [
			'1 0',
			'1 1'
		];
		const result = a.main(input);
		result.should.equal(0);
	});

	it('3', () => {
		const input = [
			'8 0',
			'4 4'
		];
		const result = a.main(input);
		result.should.equal(27);
	});

	it('4', () => {
		const input = [
			'8 1',
			'4 4',
			'3 5'
		];
		const result = a.main(input);
		result.should.equal(24);
	});
});
