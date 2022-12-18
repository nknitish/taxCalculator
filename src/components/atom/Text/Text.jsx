import { Typography, styled } from "@mui/material";
const Text = styled((props) => (
  <Typography children={props?.text} {...props} />
))`
  margin-top: ${(props) => props.marginTop};
`;

const FooterText = (props) => (
  <Text
    children={props?.text}
    align="right"
    display="block"
    variant="button"
    {...props}
  />
);

export { FooterText, Text };
