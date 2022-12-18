import React, { useEffect } from "react";
import { Button } from "../../atom/Button/Button";
import HraCard from "../../molecules/HraCard";
import InvestmentCard80C from "../../molecules/InvestmentCard80C";
import StandardDeductionCard from "../../molecules/StandardDeductionCard";
import { DoubleButtonContainer, Root } from "./Deduction.style";

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
      <InvestmentCard80C />

      {/* Double Buttons */}

      <DoubleButtonContainer>
        <Button
          text={"Back to Income"}
          variant="outlined"
          childOfDoubleButton
          color="error"
          onClick={handleBack}
        />

        <Button
          text={"Calculate Tax"}
          onClick={handleClick}
          childOfDoubleButton
        />
      </DoubleButtonContainer>
    </Root>
  );
};

export default Deduction;
