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

const calculateTax = () => {
  let basePay = prompt("Enter your base Pay");

  if (!basePay || isNaN(basePay)) {
    console.log("Inavalid Input , Please try again");
    return;
  }

  let taxableAmt = prompt(
    "Enter your net taxable amount (If you don;t know your taxable amount, then enter 0"
  );

  if (isNaN(taxableAmt)) {
    console.log("Inavalid Input , Please try again");
    return;
  }

  if (taxableAmt == 0 || taxableAmt > basePay) {
    taxableAmt = basePay;
  }

  let oldRegimeTax = Number(oldRegime(taxableAmt).toFixed(0));
  let newRegimeTax = Number(newRegime(basePay).toFixed(0));

  let oldTaxcess = Number((oldRegimeTax * 0.04).toFixed(0));
  let newTaxcess = Number((newRegimeTax * 0.04).toFixed(0));

  console.clear();

  console.log(`Base Amt : ${basePay} Taxable Amt : ${taxableAmt}`);
  console.log(
    `Old Regime : Tax ${oldRegimeTax} + cess ${oldTaxcess} = ${
      oldRegimeTax + oldTaxcess
    }`
  );
  console.log(
    `New Regime : Tax ${newRegimeTax} + cess ${newTaxcess} = ${
      newRegimeTax + newTaxcess
    }`
  );

  return "Thanks for using me";
};

//Calculate Sum of values from object

export const getSum = (data = {}) => {
  let sum = 0;
  Object.entries(data).map(([key, value]) => {
    sum += value;
  });

  return sum;
};
