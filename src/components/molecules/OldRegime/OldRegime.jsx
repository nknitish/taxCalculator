import React from "react";
import { Card } from "../../atom/Card/Card";
import TableRow from "../../atom/TableRow/TableRow";
import { useSelector } from "react-redux";
import { calculateTax, getSum } from "../../../functions/taxFunction";

const OldRegime = () => {
  const { income, deduction } = useSelector((state) => state);

  const getTaxableIncome = () => {
    let taxableIncome = getSum(income) - getSum(deduction);
    return taxableIncome > 0 ? taxableIncome : 0;
  };

  return (
    <Card>
      <TableRow text="Gross Income" value={getSum(income)} />
      <TableRow text="HRA Exemption" value={deduction?.hraExemption} />
      <TableRow
        text="Standard Deduction"
        value={deduction?.standardDeduction}
      />
      <TableRow text="Rebate Under 80c" value={deduction?.deduction80C} />
      <TableRow
        text="Other Deduction"
        value={deduction?.otherDeduction ? deduction?.otherDeduction : 0}
      />
      <TableRow text="Taxable Income" value={getTaxableIncome()} />
      <TableRow
        text="Tax on Total Income"
        value={calculateTax(getTaxableIncome(), true)?.tax}
      />
      <TableRow
        text="CESS"
        value={calculateTax(getTaxableIncome(), true)?.cess}
      />
      <TableRow
        text="Total Tax"
        value={calculateTax(getTaxableIncome(), true)?.totalTax}
      />
    </Card>
  );
};

export default OldRegime;
