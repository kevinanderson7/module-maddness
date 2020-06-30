const randomNumber = require('./random-number.js');
const dollarConverter = require('./dollar-converter.js');

let currency = () => {
  let randomDollarAmount = dollarConverter.format(randomNumber(10, 10000));
  return 'Random dollar amount: ' + randomDollarAmount;
};

module.exports = currency;
