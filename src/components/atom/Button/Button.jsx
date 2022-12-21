import { Button as MuiButton, styled } from "@mui/material";
import Colors from '../../../theme/Colors';
const Button = styled((props) => (
  <MuiButton fullWidth variant="contained" children={props?.text} {...props} />
))`
  margin-top: ${(props) => props.marginTop};
  border-radius: 20px;
  text-transform: capitalize;
  flex: ${(props) => (props?.childOfDoubleButton ? "0.4" : "1")};
`;
const SmallButton = styled((props) => (
  <MuiButton children={props?.text} {...props} />
))`
  background-color: transparent;
  border-radius: 20px;
  text-transform: capitalize;
  color: ${() => Colors.white};
`;
export { Button, SmallButton };
