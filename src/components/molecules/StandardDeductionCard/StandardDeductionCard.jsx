import { useSelector } from "react-redux";
import { Card } from "../../atom/Card/Card";
import InputCard from "../../atom/InputCard/InputCard";
import { InputContainer } from "../../atom/InputField/InputField";

const StandardDeductionCard = () => {
  const { deduction } = useSelector((state) => state);
  return (
    <Card
      marginTop={"10vh"}
      title={"STANDARD DEDUCTION "}
      subheader="Can claim total deduction upto ₹ 50k"
    >
      <InputContainer>
        <InputCard
          isFirst={true}
          label="Your Standard Deduction"
          readOnly
          value={deduction?.standardDeduction || 0}
        />

        {/* <FooterText
          marginTop={"10px"}
          text={`STANDARD DEDUCTION :  ${deduction?.standardDeduction}`}
        /> */}
      </InputContainer>
    </Card>
  );
};

export default StandardDeductionCard;
