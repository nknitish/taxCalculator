import { Button as MuiButton, styled } from "@mui/material";

const StyledButton = styled(MuiButton)`
  margin-top: 20px;
  border-radius: 20px;
  text-transform: capitalize;
`;

const Button = ({ text, ...props }) => (
  <StyledButton variant="contained" fullWidth {...props}>
    {text}
  </StyledButton>
);

//---

const StyledButtonContainer = styled("div")`
  width: 100%;
  background-color: red;
  bottom: 10px;
`;

const ButtonContainer = (props) => (
  <StyledButtonContainer> {props.children}</StyledButtonContainer>
);

export { Button, ButtonContainer };
