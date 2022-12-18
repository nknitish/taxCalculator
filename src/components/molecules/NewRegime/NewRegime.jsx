import React from "react";
import { Card } from "../../atom/Card/Card";
import TableRow from "../../atom/TableRow/TableRow";
import { useSelector } from "react-redux";
import { calculateTax, getSum } from "../../../functions/taxFunction";

const NewRegime = () => {
  const { income } = useSelector((state) => state);

  const getTaxableIncome = () => {
    let taxableIncome = getSum(income);
    return taxableIncome > 0 ? taxableIncome : 0;
  };

  return (
    <Card>
      <TableRow text="Gross Income" value={getSum(income)} />
      <TableRow text="Taxable Income" value={getTaxableIncome()} />
      <TableRow
        text="Tax on Total Income"
        value={calculateTax(getTaxableIncome(), false)?.tax}
      />
      <TableRow
        text="CESS"
        value={calculateTax(getTaxableIncome(), false)?.cess}
      />
      <TableRow
        text="Total Tax"
        value={calculateTax(getTaxableIncome(), false)?.totalTax}
      />
    </Card>
  );
};

export default NewRegime;
