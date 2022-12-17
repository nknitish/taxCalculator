import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { incomeList } from "../../../constant/constant";
import { getSum } from "../../../functions/taxFunction";
import { setIncome } from "../../../store/reducer";
import { Button } from "../../atom/Button/Button";
import { ParentCard } from "../../atom/Card/Card";
import { InputField } from "../../atom/InputField/InputField";
import { Text } from "../../atom/Text/Text";
import { DoubleButtonContainer, InputContainer } from "./Income.style";

const Income = ({ id }) => {
  const dispatch = useDispatch();
  const { income } = useSelector((state) => state);
  const [sum, setSum] = useState(0);

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    const data = {
      ...income,
      [name]: value ? Number(value) : null,
    };
    setSum(getSum(data));
    dispatch(setIncome(data));
  };

  return (
    <ParentCard
      id={id}
      title={<Text text={"Fill your Income"} variant="h2" align="center" />}
    >
      <InputContainer>
        {incomeList?.map(({ name, placeHolder }) => (
          <InputField
            key={name}
            value={income[name]}
            name={name}
            onChange={handleInputChange}
            placeholder={placeHolder}
          />
        ))}
        {sum > 0 && (
          <Text
            marginTop={20}
            text={`Your total income is :  ${sum}`}
            align="right"
            variant="h6"
          />
        )}
      </InputContainer>
      <DoubleButtonContainer>
        {sum > 0 && (
          <Button
            text={"Reset/Clear"}
            variant="outlined"
            childOfDoubleButton
            color="error"
          />
        )}
        <Button
          text={"Go to Next Step"}
          childOfDoubleButton={sum > 0 ? true : false}
        />
      </DoubleButtonContainer>
    </ParentCard>
  );
};

export default Income;
