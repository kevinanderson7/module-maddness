let formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
formatter.format(2500);

module.exports = formatter;
