import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { investmentList } from "../../../constant/constant";
import { getSum } from "../../../functions/taxFunction";
import { setDeduction, setInvestment } from "../../../store/reducer";
import { Button } from "../../atom/Button/Button";
import { Card } from "../../atom/Card/Card";
import InputCard from "../../atom/InputCard/InputCard";
import { InputContainer } from "../../atom/InputField/InputField";
import { Text } from "../../atom/Text/Text";
import { DoubleButtonContainer } from "./Deduction.style";
import { Root } from "./Deduction.style";

const HraCard = () => {
  const dispatch = useDispatch();
  const { income, deduction } = useSelector((state) => state);
  const [annualRent, setAnnualRent] = useState(0);

  const getPartialHra = (hra = 0) => {
    return (hra * 0.4).toFixed(0);
  };

  const handleRentChange = (e) => {
    const { value } = e.target;
    setAnnualRent(value);
  };

  useEffect(() => {
    let rent = (annualRent - 0.1 * income?.basic || 0).toFixed(0);
    let leastAmt = Math.min(
      income?.hra || 0,
      getPartialHra(income?.hra),
      rent > 0 ? rent : 0
    );

    dispatch(
      setDeduction({
        ...deduction,
        hraExemption: leastAmt,
      })
    );
  }, [income, annualRent]);

  return (
    <Card marginTop={"10vh"} title={"HRA EXEMPTION"}>
      <InputContainer>
        <InputCard
          label={"Your Actual HRA"}
          readOnly
          value={income?.hra || 0}
        />

        <InputCard
          label={"40% of your HRA"}
          readOnly
          value={getPartialHra(income?.hra)}
        />

        <InputCard
          label={"Enter your annual Rent"}
          value={annualRent}
          onChange={handleRentChange}
        />
        <Text
          marginTop={"20px"}
          text={`HRA EXEMPTION :  ${deduction?.hraExemption}`}
          align="right"
          variant="h6"
        />
      </InputContainer>
    </Card>
  );
};

const InvestmentCard = () => {
  const dispatch = useDispatch();
  const { investment, deduction } = useSelector((state) => state);
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      setInvestment({
        ...investment,
        [name]: value ? Number(value) : null,
      })
    );
  };

  useEffect(() => {
    let sum = getSum(investment);
    let maxRebate = sum < 150000 ? sum : 1500000;
    dispatch(
      setDeduction({
        ...deduction,
        ["80C"]: maxRebate,
      })
    );
  }, [investment]);

  return (
    <Card marginTop={"10vh"} title={"Section 80C"}>
      <InputContainer>
        {investmentList?.map(({ label, name }) => (
          <InputCard
            key={name}
            label={label}
            value={investment[name]}
            name={name}
            onChange={handleInputChange}
          />
        ))}
        <Text
          marginTop={"20px"}
          text={`HRA EXEMPTION :  ${deduction?.["80C"]}`}
          align="right"
          variant="h6"
        />
      </InputContainer>
    </Card>
  );
};

const StandardDeductionCard = () => {
  const { deduction } = useSelector((state) => state);
  return (
    <Card marginTop={"10vh"} title={"Standard Deduction"}>
      <InputContainer>
        <InputCard readOnly value={deduction?.standardDeduction || 0} />
        <Text
          marginTop={"20px"}
          text={`STANDARD DEDUCTION :  ${deduction?.standardDeduction}`}
          align="right"
          variant="h6"
        />
      </InputContainer>
    </Card>
  );
};

const Deduction = ({ handleBack, handleClick }) => {
  //Scroll to Top when this component renders
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Root>
      {/* Exemption */}
      <HraCard />
      {/* Deductions */}
      <StandardDeductionCard />
      <InvestmentCard />

      {/* Double Buttons */}

      <DoubleButtonContainer>
        <Button
          text={"Go Back to Total Income"}
          variant="outlined"
          childOfDoubleButton
          color="error"
          onClick={handleBack}
        />

        <Button
          text={"Go to Next Step"}
          onClick={handleClick}
          childOfDoubleButton
        />
      </DoubleButtonContainer>
    </Root>
  );
};

export default Deduction;
