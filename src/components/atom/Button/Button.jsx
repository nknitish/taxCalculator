import { styled, Button as MuiButton } from "@mui/material";
import Colors from "../../../theme/Colors";

const StyledButton = styled(MuiButton)`
  color: ${Colors.navyBlue};
  border: 2px solid ${Colors.navyBlue};
  :hover {
    border: 2px solid ${Colors.navyBlue};
  }
  border-radius: 20px;
`;

const Button = ({ text, ...props }) => (
  <StyledButton variant="outlined" fullWidth {...props}>
    {text}
  </StyledButton>
);

export { Button };
