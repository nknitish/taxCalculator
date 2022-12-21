import { ParentCard } from "../../atom/Card/Card";
import { Button } from "../../atom/Button/Button";
import { List } from "../../atom/List/List";
import { taxCalculatorSteps } from "../../../constant/constant";

const Welcome = ({ handleClick }) => {
  return (
    <ParentCard
      marginTop={"15vh"}
      title="Tax Calculator"
      subheader={"Calculate your tax in just 3 simple steps"}
    >
      <List data={taxCalculatorSteps} />
      <Button marginTop={"20px"} text={"Let's go"} onClick={handleClick} />
    </ParentCard>
  );
};

export default Welcome;
