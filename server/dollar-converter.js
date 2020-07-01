const formatter = (newRandomNumber) => {
  const formatNumber = new Intl.NumberFormat().format(newRandomNumber);
  return '$' + formatNumber;
};

module.exports = formatter;
