import { Typography, styled } from "@mui/material";
const Text = styled((props) => (
  <Typography children={props?.text} {...props} />
))`
  margin-top: ${(props) => props.marginTop};
`;

export { Text };
