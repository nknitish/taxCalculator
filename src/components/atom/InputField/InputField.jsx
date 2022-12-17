import { OutlinedInput, styled } from "@mui/material";

const StyleInputField = styled(OutlinedInput)`
  margin-top: 20px;
  height: 30px;
  border-radius: 20px;
`;

const InputField = (props) => {
  return <StyleInputField fullWidth type="number" {...props} />;
};

export { InputField };
