const oldRegime = (amt) => {
  if (amt < 250000) {
    return 0;
  } else if (amt > 250000 && amt < 500000) {
    return 0;
  } else if (amt > 500000 && amt < 750000) {
    return 12500 + 0.2 * (amt - 500000);
  } else if (amt > 750000 && amt < 1000000) {
    return 62500 + 0.2 * (amt - 750000);
  } else if (amt > 1000000 && amt < 1250000) {
    return 112500 + 0.3 * (amt - 1000000);
  } else if (amt > 1250000 && amt < 1500000) {
    return 187500 + 0.3 * (amt - 1250000);
  } else {
    return 262500 + 0.3 * (amt - 1500000);
  }
};

const newRegime = (amt) => {
  if (amt < 250000) {
    return 0;
  } else if (amt > 250000 && amt < 500000) {
    return 0;
  } else if (amt > 500000 && amt < 750000) {
    return 12500 + 0.1 * (amt - 500000);
  } else if (amt > 750000 && amt < 1000000) {
    return 37500 + 0.15 * (amt - 750000);
  } else if (amt > 1000000 && amt < 1250000) {
    return 75000 + 0.2 * (amt - 1000000);
  } else if (amt > 1250000 && amt < 1500000) {
    return 125000 + 0.25 * (amt - 1250000);
  } else {
    return 187500 + 0.3 * (amt - 1500000);
  }
};

export const calculateTax = (amt, isOldRegime = true) => {
  let tax = 0;

  if (isOldRegime) {
    tax = Number(oldRegime(amt).toFixed(0));
  } else {
    tax = Number(newRegime(amt).toFixed(0));
  }

  return {
    taxableAmount: amt,
    tax: tax,
    cess: Number((tax * 0.04).toFixed(0)),
    totalTax: tax + Number((tax * 0.04).toFixed(0)),
  };
};

//Calculate Sum of values from object

export const getSum = (data = {}) => {
  let sum = 0;
  Object.entries(data).map(([key, value]) => {
    sum += value;
  });

  return sum;
};
