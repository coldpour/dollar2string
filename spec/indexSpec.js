const i = require('../index.js');

describe('index.js', function() {
  describe('when given a string', function() {
    it('parses dollars and cents', function() {
      expect(i('2.34')).toBe('Two Dollars and 34/100');
    });

    it('ignores more than two places after the decimal', function() {
      expect(i('2.345')).toBe('Two Dollars and 34/100');
    });

    it('ignores multiple decimal places', function() {
      expect(i('2.3.4')).toBe('Two Dollars and 30/100');
    });
  });
});
