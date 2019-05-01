const assert = require('assert');
const style = require('./calculateStylePoints');
 
describe('style', () => {

  it('should return total style score', () => {
    const actual = style([18.5, 18.5, 20, 17.0, 19.0]);

    const expected = 56;

    assert.equal(actual, expected);
  })
  it('should return total style score', () => {
    const actual = style([17.5, 17.5, 15, 15.5, 16.5]);

    const expected = 49.5;

    assert.equal(actual, expected);
  })
  it('should return total style score', () => {
    const actual = style([0, 0, 0, 0, 0]);

    const expected = 0;

    assert.equal(actual, expected);
  })
})