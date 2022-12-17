import { Typography, styled } from "@mui/material";
const StyledText = styled(Typography)``;

const Text = ({ text, ...props }) => <StyledText {...props} children={text} />;
export { Text };
