import { useDispatch, useSelector } from "react-redux";
import { other_Deduction } from "../../../constant/constant";
import { setDeduction } from "../../../store/reducer";
import { Card } from "../../atom/Card/Card";
import InputCard from "../../atom/InputCard/InputCard";
import { InputContainer } from "../../atom/InputField/InputField";
import { FooterText } from "../../atom/Text/Text";

const OtherDeductionCard = () => {
  const { deduction } = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      setDeduction({
        ...deduction,
        [name]: value ? Number(value) : null,
      })
    );
  };
  return (
    <Card
      marginTop={"10vh"}
      title={"OTHER DEDUCTION "}
      subheader="Other Deduction Includes Professional Tax etc"
    >
      <InputContainer>
        {other_Deduction.map(({ label, name }, index) => (
          <InputCard
            isFirst={index === 0}
            key={name}
            label={label}
            value={deduction[name]}
            name={name}
            onChange={handleInputChange}
          />
        ))}

        <FooterText
          marginTop={"10px"}
          text={`OTHER DEDUCTION :  ${
            deduction?.otherDeduction ? deduction?.otherDeduction : 0
          }`}
        />
      </InputContainer>
    </Card>
  );
};

export default OtherDeductionCard;
