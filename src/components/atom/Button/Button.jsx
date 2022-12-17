import { Button as MuiButton, styled } from "@mui/material";

const Button = styled((props) => (
  <MuiButton fullWidth variant="contained" children={props?.text} {...props} />
))`
  margin-top: 20px;
  border-radius: 20px;
  text-transform: capitalize;
  flex: ${(props) => (props?.childOfDoubleButton ? "0.4" : "1")};
`;

export { Button };
