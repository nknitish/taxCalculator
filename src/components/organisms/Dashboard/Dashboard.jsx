import React, { useState } from "react";
import { Button } from "../../atom/Button/Button";
import { Text } from "../../atom/Text/Text";
import NewRegime from "../../molecules/NewRegime";
import OldRegime from "../../molecules/OldRegime";
import { DoubleButtonContainer } from "./Dashboard.style";
import { Root } from "./Dashboard.style";

const Dashboard = ({ handleBack }) => {
  const [oldRegime, setOldRegime] = useState(true);
  return (
    <Root>
      <Text text="<- Back" onClick={handleBack} />
      <DoubleButtonContainer>
        <Button
          text={"Old Regime"}
          childOfDoubleButton
          onClick={() => setOldRegime(true)}
          variant={oldRegime ? "contained" : "outlined"}
        />
        <Button
          text={"New Regime"}
          onClick={() => setOldRegime(false)}
          childOfDoubleButton
          variant={!oldRegime ? "contained" : "outlined"}
        />
      </DoubleButtonContainer>

      {oldRegime ? <OldRegime /> : <NewRegime />}
    </Root>
  );
};

export default Dashboard;
