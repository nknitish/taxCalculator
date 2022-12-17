import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incomeList } from "../../../constant/constant";
import { getSum } from "../../../functions/taxFunction";
import { setIncome } from "../../../store/reducer";
import { Button } from "../../atom/Button/Button";
import { ParentCard } from "../../atom/Card/Card";
import InputCard from "../../atom/InputCard/InputCard";
import { InputContainer } from "../../atom/InputField/InputField";
import { Text } from "../../atom/Text/Text";
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
      id={id}
      title={<Text text={"Fill your Income"} variant="h2" align="center" />}
    >
      <InputContainer>
        {incomeList?.map(({ label, name }) => (
          <InputCard
            key={name}
            label={label}
            value={income[name]}
            name={name}
            onChange={handleInputChange}
          />
        ))}

        <Text
          marginTop={"20px"}
          text={`GROSS INCOME :  ${sum}`}
          align="right"
          variant="h6"
        />
      </InputContainer>

      <DoubleButtonContainer>
        {sum > 0 && (
          <Button
            text={"Reset/Clear"}
            variant="outlined"
            childOfDoubleButton
            color="error"
            onClick={() => dispatch(setIncome({}))}
          />
        )}
        <Button
          text={"Go to Next Step"}
          onClick={handleClick}
          childOfDoubleButton={sum > 0 ? true : false}
        />
      </DoubleButtonContainer>
    </ParentCard>
  );
};

export default Income;
