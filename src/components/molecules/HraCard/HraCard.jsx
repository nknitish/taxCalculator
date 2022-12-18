import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setDeduction } from "../../../store/reducer";
import { Card } from "../../atom/Card/Card";
import InputCard from "../../atom/InputCard/InputCard";
import { InputContainer } from "../../atom/InputField/InputField";
import { FooterText } from "../../atom/Text/Text";
import { setAnnualRent } from "../../../store/reducer";

const HraCard = () => {
  const dispatch = useDispatch();
  const { income, annualRent, deduction } = useSelector((state) => state);

  const getPartialHra = (hra = 0) => {
    return (hra * 0.4).toFixed(0);
  };

  const handleRentChange = (e) => {
    const { value } = e.target;
    dispatch(setAnnualRent(value));
  };

  //Calculate HRA Exemption on Change in Income | Rent
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
    <Card
      marginTop={"10vh"}
      title={"HRA EXEMPTION"}
      subheader="Least amount are exempted in HRA "
    >
      <InputContainer>
        <InputCard
          isFirst={true}
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
        <FooterText
          marginTop={"10px"}
          text={`HRA EXEMPTION :  ${deduction?.hraExemption}`}
        />
      </InputContainer>
    </Card>
  );
};

export default HraCard;
