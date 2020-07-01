const randomNumber = require('./random-number.js');
const dollarConverter = require('./dollar-converter.js');

const currency = () => {
  const random = randomNumber(10, 10000);
  const money = dollarConverter(random);

  return money;
};

module.exports = currency;
