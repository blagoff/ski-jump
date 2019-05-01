const assert = require('assert');
const distance = require('./calculateDistancePoints');

describe('distance', () => {
  describe('mammoth', () => {
    it('should return distance score', () => {
      const actual = distance('mammoth', 225, 200);

      const expected = 150;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('mammoth', 194, 200);

      const expected = 112.8;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('mammoth', 194, 200);

      const expected = 112.8;

      assert.equal(actual, expected);
    })

  })
  describe('large', () => {
    it('should return distance score', () => {
      const actual = distance('large', 134, 120);

      const expected = 145.2;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('large', 115, 120);

      const expected = 111;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('large', 0, 120);

      const expected = 0;

      assert.equal(actual, expected);
    })
  })
  describe('normal', () => {

    it('should return distance score', () => {
      const actual = distance('normal', 111, 98);

      const expected = 86;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('normal', 106.5, 98);

      const expected = 77;

      assert.equal(actual, expected);
    })

    it('should return distance score', () => {
      const actual = distance('normal', 0, 98);

      const expected = 0;

      assert.equal(actual, expected);
    })
  })
})
