
/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('leftHorizontal', () => {
	it('1', () => {
		const obstacles = [[4, 2]];
		const board = a.createBoard(5, obstacles);
		const result = a.leftHorizontal(5, 4, 3, board);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[4, 1]];
		const board = a.createBoard(5, obstacles);
		const result = a.leftHorizontal(5, 4, 3, board);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[1, 1]];
		const board = a.createBoard(5, obstacles);
		const result = a.leftHorizontal(5, 4, 3, board);
		result.should.equal(2);
	});
});

describe('rightHorizontal', () => {
	it('1', () => {
		const obstacles = [[4, 4]];
		const board = a.createBoard(5, obstacles);
		const result = a.rightHorizontal(5, 4, 3, board);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[4, 5]];
		const board = a.createBoard(5, obstacles);
		const result = a.rightHorizontal(5, 4, 3, board);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[1, 1]];
		const board = a.createBoard(5, obstacles);
		const result = a.rightHorizontal(5, 4, 3, board);
		result.should.equal(2);
	});
});

describe('upVertical', () => {
	it('1', () => {
		const obstacles = [[3, 3]];
		const board = a.createBoard(5, obstacles);
		const result = a.upVertical(5, 2, 3, board);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[5, 3]];
		const board = a.createBoard(5, obstacles);
		const result = a.upVertical(5, 2, 3, board);
		result.should.equal(2);
	});
	it('3', () => {
		const obstacles = [[1, 1]];
		const board = a.createBoard(5, obstacles);
		const result = a.upVertical(5, 2, 3, board);
		result.should.equal(3);
	});
});

describe('downVertical', () => {
	it('1', () => {
		const obstacles = [[3, 3]];
		const board = a.createBoard(5, obstacles);
		const result = a.downVertical(5, 4, 3, board);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[2, 3]];
		const board = a.createBoard(5, obstacles);
		const result = a.downVertical(5, 4, 3, board);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[1, 1]];
		const board = a.createBoard(5, obstacles);
		const result = a.downVertical(5, 4, 3, board);
		result.should.equal(3);
	});
});

describe('upLeftDiagonal', () => {
	it('1', () => {
		const obstacles = [[3, 3]];
		const board = a.createBoard(5, obstacles);
		const result = a.upLeftDiagonal(5, 2, 4, board);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[4, 2]];
		const board = a.createBoard(5, obstacles);
		const result = a.upLeftDiagonal(5, 2, 4, board);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[5, 1]];
		const board = a.createBoard(5, obstacles);
		const result = a.upLeftDiagonal(5, 2, 4, board);
		result.should.equal(2);
	});
	it('4', () => {
		const obstacles = [[1, 1]];
		const board = a.createBoard(5, obstacles);
		const result = a.upLeftDiagonal(5, 2, 4, board);
		result.should.equal(3);
	});
});

describe('downLeftDiagonal', () => {
	it('1', () => {
		const obstacles = [[3, 3]];
		const board = a.createBoard(5, obstacles);
		const result = a.downLeftDiagonal(5, 4, 2, board);
		result.should.equal(0);
	});
	it('2', () => {
		const obstacles = [[2, 4]];
		const board = a.createBoard(5, obstacles);
		const result = a.downLeftDiagonal(5, 4, 2, board);
		result.should.equal(1);
	});
	it('3', () => {
		const obstacles = [[1, 5]];
		const board = a.createBoard(5, obstacles);
		const result = a.downLeftDiagonal(5, 4, 2, board);
		result.should.equal(2);
	});
	it('4', () => {
		const obstacles = [[1, 1]];
		const board = a.createBoard(5, obstacles);
		const result = a.downLeftDiagonal(5, 4, 2, board);
		result.should.equal(3);
	});
});
