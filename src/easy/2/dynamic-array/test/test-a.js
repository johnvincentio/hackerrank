//

/* global describe, it */

const should = require('chai').should();

const a = require('../a');

describe('test', () => {
  it('1', () => {
    const input = ['2 5', '1 0 5', '1 1 7', '1 0 3', '2 1 0', '2 1 1'];
    const result = a.main(input);
    result.should.be.a('array');
    result.length.should.equal(2);
    result[0].should.equal(7);
    result[1].should.equal(3);
  });
});
