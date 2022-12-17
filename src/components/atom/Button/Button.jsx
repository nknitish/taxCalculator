import { Button as MuiButton, styled } from "@mui/material";

const Button = styled((props) => (
  <MuiButton fullWidth variant="contained" children={props?.text} {...props} />
))`
  margin-top: 20px;
  border-radius: 20px;
  text-transform: capitalize;
`;

export { Button };
