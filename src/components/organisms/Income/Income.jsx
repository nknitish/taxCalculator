import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incomeList } from "../../../constant/constant";
import { getSum } from "../../../functions/taxFunction";
import { setIncome } from "../../../store/reducer";
import { Button } from "../../atom/Button/Button";
import { ParentCard } from "../../atom/Card/Card";
import InputCard from "../../atom/InputCard/InputCard";
import { InputContainer } from "../../atom/InputField/InputField";
import { FooterText } from "../../atom/Text/Text";
import { DoubleButtonContainer } from "./Income.style";

const Income = ({ id, handleClick }) => {
  const dispatch = useDispatch();
  const { income } = useSelector((state) => state);
  const [sum, setSum] = useState(0);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    dispatch(
      setIncome({
        ...income,
        [name]: value ? Number(value) : null,
      })
    );
  };

  useEffect(() => {
    setSum(getSum(income));
  }, [income]);

  return (
    <ParentCard
      marginTop={"15vh"}
      id={id}
      title={"Fill your Income"}
      subheader={"Salary + Other Income"}
    >
      <InputContainer>
        {incomeList?.map(({ label, name }, index) => (
          <InputCard
            isFirst={index === 0}
            key={name}
            label={label}
            value={income[name]}
            name={name}
            onChange={handleInputChange}
          />
        ))}

        <FooterText marginTop={"10px"} text={`GROSS INCOME :  ${sum}`} />
      </InputContainer>

      <DoubleButtonContainer>
        <Button
          text={"Reset/Clear"}
          variant="outlined"
          childOfDoubleButton
          color="error"
          disabled={!sum}
          onClick={() => dispatch(setIncome({}))}
        />
        <Button
          text={"Proceed"}
          disabled={!sum}
          onClick={handleClick}
          childOfDoubleButton
        />
      </DoubleButtonContainer>
    </ParentCard>
  );
};

export default Income;
