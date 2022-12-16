import { ParentCard } from "../atom/Card/Card";
import { Button, ButtonContainer } from "../atom/Button/Button";

const Welcome = () => {
  return (
    <ParentCard>
      Hello world
      <ButtonContainer>
        <Button text={"Let's go"} />
      </ButtonContainer>
    </ParentCard>
  );
};

export default Welcome;
