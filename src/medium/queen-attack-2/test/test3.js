
/* global describe, beforeEach, it */

const should = require('chai').should();

const a = require('../a');

let obstacles = {};

describe.only('calculateObstacles N', () => {
	beforeEach(() => {
		obstacles = a.setup();
	});

	it('1', () => {
		a.calculateObstacles(obstacles, 2, 3, 3, 3);
		obstacles.N.should.equal(1);
	});
	it('2', () => {
		a.calculateObstacles(obstacles, 2, 3, 5, 3);
		obstacles.N.should.equal(3);
	});
	it('3', () => {
		a.calculateObstacles(obstacles, 2, 3, 5, 3);
		a.calculateObstacles(obstacles, 2, 3, 3, 3);
		obstacles.N.should.equal(1);
	});
});

describe.only('calculateObstacles S', () => {
	beforeEach(() => {
		obstacles = a.setup();
	});

	it('1', () => {
		a.calculateObstacles(obstacles, 4, 3, 3, 3);
		obstacles.S.should.equal(1);
	});
	it('2', () => {
		a.calculateObstacles(obstacles, 4, 3, 2, 3);
		obstacles.S.should.equal(2);
	});
	it('3', () => {
		a.calculateObstacles(obstacles, 4, 3, 1, 3);
		a.calculateObstacles(obstacles, 4, 3, 2, 3);
		obstacles.S.should.equal(2);
	});
});
