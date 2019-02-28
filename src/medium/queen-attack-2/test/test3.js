
/* global describe, beforeEach, it */

const should = require('chai').should();

const a = require('../a');

let appObstacles = {};

describe('calculateObstacles 0', () => {
	beforeEach(() => {
		appObstacles = {
			'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}
		};
	});

	it('1', () => {
		a.calculateObstacles(appObstacles, 2, 3, 3, 3);
		appObstacles['0'].distance.should.equal(1);
		appObstacles['0'].row.should.equal(3);
		appObstacles['0'].col.should.equal(3);
	});
	it('2', () => {
		a.calculateObstacles(appObstacles, 2, 3, 5, 3);
		appObstacles['0'].distance.should.equal(3);
		appObstacles['0'].row.should.equal(5);
		appObstacles['0'].col.should.equal(3);
	});
	it('3', () => {
		a.calculateObstacles(appObstacles, 2, 3, 5, 3);
		a.calculateObstacles(appObstacles, 2, 3, 3, 3);
		appObstacles['0'].distance.should.equal(1);
		appObstacles['0'].row.should.equal(3);
		appObstacles['0'].col.should.equal(3);
	});
});

describe.only('calculateObstacles 4', () => {
	beforeEach(() => {
		appObstacles = {
			'0': {}, '1': {}, '2': {}, '3': {}, '4': {}, '5': {}, '6': {}, '7': {}
		};
	});

	it('1', () => {
		a.calculateObstacles(appObstacles, 4, 3, 3, 3);
		appObstacles['4'].distance.should.equal(1);
		appObstacles['4'].row.should.equal(3);
		appObstacles['4'].col.should.equal(3);
	});
	it('2', () => {
		a.calculateObstacles(appObstacles, 4, 3, 2, 3);
		appObstacles['4'].distance.should.equal(2);
		appObstacles['4'].row.should.equal(2);
		appObstacles['4'].col.should.equal(3);
	});
	it('3', () => {
		a.calculateObstacles(appObstacles, 4, 3, 1, 3);
		a.calculateObstacles(appObstacles, 4, 3, 2, 3);
		appObstacles['4'].distance.should.equal(2);
		appObstacles['4'].row.should.equal(2);
		appObstacles['4'].col.should.equal(3);
	});
});
