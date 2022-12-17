import { ParentCard } from "../../atom/Card/Card";
import { Button } from "../../atom/Button/Button";
import { Text } from "../../atom/Text/Text";
import { List } from "../../atom/List/List";
import { taxCalculatorSteps } from "../../../constant/constant";

const Welcome = ({ handleClick }) => {
  
  return (
    <ParentCard
      title={<Text text={"Tax Calculator"} variant="h2" align="center" />}
      subheader={""}
    >
      <Text
        text={"Calculate your tax in just 3 simple steps"}
        variant="h4"
        align="left"
      />
      <List data={taxCalculatorSteps} />
      <Button marginTop={"20px"} text={"Let's go"} onClick={handleClick} />
    </ParentCard>
  );
};

export default Welcome;
