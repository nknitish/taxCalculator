import { OutlinedInput, styled } from "@mui/material";

const StyledTextFiled = styled(OutlinedInput)`
  margin-top: 20px;
  height: 30px;
  border-radius: 20px;
`;

const InputField = (props) => (
  <StyledTextFiled fullWidth type="number" {...props} />
);

export { InputField };
