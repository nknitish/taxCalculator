import { incomeList } from "../../../constant/constant";
import { Button } from "../../atom/Button/Button";
import { ParentCard } from "../../atom/Card/Card";
import { InputField } from "../../atom/InputField/InputField";
import { Text } from "../../atom/Text/Text";
import { InputContainer } from "./Income.style";

const Income = () => {
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    console.log(value, name);
  };

  return (
    <ParentCard
      title={<Text text={"Fill your Income"} variant="h2" align="center" />}
    >
      <InputContainer>
        {incomeList?.map(({ name, text }) => (
          <InputField
            key={name}
            value={null}
            name={name}
            onChange={handleInputChange}
            placeholder={text}
          />
        ))}
      </InputContainer>

      <Button text={"Go to Next Step"} />
    </ParentCard>
  );
};

export default Income;
