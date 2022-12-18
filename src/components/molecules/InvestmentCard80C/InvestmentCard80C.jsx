import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { investment_80C_List } from "../../../constant/constant";
import { getSum } from "../../../functions/taxFunction";
import { setDeduction, setInvestment80C } from "../../../store/reducer";
import { Card } from "../../atom/Card/Card";
import InputCard from "../../atom/InputCard/InputCard";
import { InputContainer } from "../../atom/InputField/InputField";
import { FooterText } from "../../atom/Text/Text";

const InvestmentCard80C = () => {
  const dispatch = useDispatch();
  const { investment80C, deduction } = useSelector((state) => state);
  const handleInputChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      setInvestment80C({
        ...investment80C,
        [name]: value ? Number(value) : null,
      })
    );
  };

  useEffect(() => {
    let sum = getSum(investment80C);
    let maxRebate = sum < 150000 ? sum : 150000;
    dispatch(
      setDeduction({
        ...deduction,
        deduction80C: maxRebate,
      })
    );
  }, [investment80C]);

  return (
    <Card
      marginTop={"10vh"}
      title={"SECTION 80C"}
      subheader="Can claim total deduction upto ₹ 1.5L"
    >
      <InputContainer>
        {investment_80C_List?.map(({ label, name }, index) => (
          <InputCard
            isFirst={index === 0}
            key={name}
            label={label}
            value={investment80C[name]}
            name={name}
            onChange={handleInputChange}
          />
        ))}
        <FooterText
          marginTop={"10px"}
          text={`Deduction in 80c :  ${deduction?.deduction80C}`}
        />
      </InputContainer>
    </Card>
  );
};

export default InvestmentCard80C;
