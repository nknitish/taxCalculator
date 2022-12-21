import React, { useState } from "react";
import { Button, SmallButton } from "../../atom/Button/Button";
import NewRegime from "../../molecules/NewRegime";
import OldRegime from "../../molecules/OldRegime";
import {
  BackButtonContainer,
  DoubleButtonContainer,
  Root,
} from "./Dashboard.style";

const Dashboard = ({ handleBack }) => {
  const [oldRegime, setOldRegime] = useState(true);
  return (
    <Root>
      <BackButtonContainer>
        <SmallButton text="Go Back" onClick={handleBack} />
      </BackButtonContainer>
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
