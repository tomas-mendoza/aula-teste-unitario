const divide = (a, b) => {
  if(b === 0) {
    throw new Error('Impossible to divide per 0');
  }

  return a/b;
};

module.exports = divide;