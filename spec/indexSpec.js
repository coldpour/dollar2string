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

    it('discards non-numeric chars', function() {
      expect(i('&2,.a3;4')).toBe('Two Dollars and 34/100');
    });

    describe('works in the', function() {
      it('teens', function() {
        expect(i('11.98')).toBe('Eleven Dollars and 98/100');
      });

      it('twenties', function() {
        expect(i('21.98')).toBe('Twenty One Dollars and 98/100');
      });

      it('thirties', function() {
        expect(i('37.24')).toBe('Thirty Seven Dollars and 24/100');
      });

      it('fourties', function() {
        expect(i('47.24')).toBe('Fourty Seven Dollars and 24/100');
      });

      it('fifties', function() {
        expect(i('57.24')).toBe('Fifty Seven Dollars and 24/100');
      });

      it('sixties', function() {
        expect(i('67.24')).toBe('Sixty Seven Dollars and 24/100');
      });

      it('nineties', function() {
        expect(i('99.99')).toBe('Ninety Nine Dollars and 99/100');
      });

      fit('hundreds', function() {
        expect(i('123.99')).toBe('One Hundred Twenty Three Dollars and 99/100');
      });
    });

    describe('works with zeros in the', function() {
      it('tens and ones with hundreds', function() {
        expect(i('100.99')).toBe('One Hundred Dollars and 99/100');
      });

      it('hundres and ones with tens', function() {
        expect(i('020.99')).toBe('Twenty Dollars and 99/100');
      });

      it('hundres and tens with ones', function() {
        expect(i('002.99')).toBe('Two Dollars and 99/100');
      });

      it('ones with hundreds and tens', function() {
        expect(i('320.99')).toBe('Three Hundred Twenty Dollars and 99/100');
      });
    });
  });
});

describe('learning tests', function() {
  it('string 19 is less than string 20', function() {
    expect('19').toBeLessThan('20');
  });

  it('string 190 is less than string 20', function() {
    expect('190').toBeLessThan('20');
  });
});
