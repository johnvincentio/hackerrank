//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
	it('1', () => {
		const url1 = 'http://johnvincent.io';
		const url2 = 'https://johnvincent.io';
		const str = `${url1};${url2}`;
		const input = [
			'1', // size of the array
			str // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(false);
	});

	it('2', () => {
		const url1 = 'http://johnvincent.io';
		const url2 = 'htTP://johnvincent.io';
		const str = `${url1};${url2}`;
		const input = [
			'1', // size of the array
			str // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(true);
	});

	it('3', () => {
		const url1 = 'http:80//johnvincent.io';
		const url2 = 'http://johnvincent.io:80';
		const str = `${url1};${url2}`;
		const input = [
			'1', // size of the array
			str // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(true);
	});

	it('4', () => {
		const url1 = 'http://johnvincent.io:80';
		const url2 = 'http://johnvincent.io:8080';
		const str = `${url1};${url2}`;
		const input = [
			'1', // size of the array
			str // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(false);
	});

	it('5', () => {
		const url1 = 'http://johnvincent.io';
		const url2 = 'http://JOHNvincent.io';
		const str = `${url1};${url2}`;
		const input = [
			'1', // size of the array
			str // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(true);
	});

	it('6', () => {
		const url1 = 'http://johnvincent.io';
		const url2 = 'http://JOHNvincent.io/';
		const str = `${url1};${url2}`;
		const input = [
			'1', // size of the array
			str // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(true);
	});

	it.only('7', () => {
		const url1 = 'http://johnvincent.io';
		const url2 = 'http://johnvincent2.io/';
		const str = `${url1};${url2}`;
		const input = [
			'1', // size of the array
			str // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(false);
	});

	it('11', () => {
		const url1 = 'http://abc.com:80/~smith/home.html;http://ABC.com/%7Esmith/home.html';
		const input = [
			'1', // size of the array
			url1 // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(true);
	});

	it('12', () => {
		const url2 = 'HTTPS://abc.com:8080/path/index*!^(~|>`^|<{`{>.html;HTTP://EXAMPLE.com:8081//index{~.html';
		const input = [
			'1', // size of the array
			url2 // integers a[i]
		];
		const result = a.main(input);
		result.should.be.a('array');
		result.length.should.equal(1);
		result[0].should.equal(false);
	});
});
