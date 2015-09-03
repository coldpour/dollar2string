const spelling = {
  1: 'one',
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten',
  11: 'eleven',
  12: 'twelve',
  13: 'thirteen',
  14: 'fourteen',
  15: 'fifteen',
  16: 'sixteen',
  17: 'seventeen',
  18: 'eighteen',
  19: 'nineteen',
  20: 'twenty'
};

module.exports = function(stringOfNumbers) {
  const splitString = stringOfNumbers.split('.');

  const dollars = onlyNumericChars(splitString[0]);
  const cents = onlyNumericChars(splitString[1]);

  return parseDollars(dollars) + ' and ' + parseCents(cents);
};

function onlyNumericChars(unsanitized) {
  const sanitized = unsanitized.replace(/[^0-9]/g, '');
  return sanitized;
};

function parseDollars(dollarsString) {
  const spelledString = spelling[dollarsString];
  return capitalize(spelledString) + ' Dollars';
};

function parseCents(centsString) {
  const twoDigits = String(centsString + '00').substr(0, 2);
  return twoDigits + '/100';
};

function capitalize(string) {
  const first = string.charAt(0);
  const rest = string.slice(1);
  return first.toUpperCase() + rest;
};
