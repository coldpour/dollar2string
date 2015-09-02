const i = require('../index.js');

describe('index.js', function() {
  describe('when the input is not in the map', function() {
    it('returns the user\'s input', function() {
      expect(i()).toBe(undefined);
    });

    it('returns strings', function() {
      expect(i('he')).toBe('he');
    });

    it('returns bigger numbers', function() {
      expect(i(45)).toBe(45);
    });
  });

  describe('when the input is in the map', function() {
    it('returns the spelling of numbers', function() {
      expect(i(2)).toBe('two');
    });

    it('returns the spelling of strings', function() {
      expect(i('2')).toBe('two');
    });
  });
});
