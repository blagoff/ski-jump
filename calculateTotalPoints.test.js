const assert = require('assert');
const totalScore = require('./calculateTotalPoints');

describe('totalScore', () => {
    
  it('should return total score', () => {
    const actual = totalScore('mammoth', 208.5, 200, [17.5, 17.5, 17.5, 17, 17], -2.7, 0);

    const expected = 179.5;

    assert.equal(actual, expected);
  })

  it('should return total score', () => {
    const actual = totalScore('large', 134, 120, [19.0, 20.0, 19.5, 19.0, 18.5], -5.4, 0);

    const expected = 197.3;

    assert.equal(actual, expected);
  })

  it('should return total score', () => {
    const actual = totalScore('normal', 106.5, 98, [18.5, 18.5, 18.5, 19.0, 19.0], -13.5, 6.4);

    const expected = 125.9; 

    assert.equal(actual, expected);
  })

 

})