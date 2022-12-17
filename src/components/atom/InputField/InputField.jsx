import { OutlinedInput, styled } from "@mui/material";

const InputField = styled((props) => (
  <OutlinedInput fullWidth type="number" {...props} />
))`
  margin-top: 20px;
  height: 30px;
  border-radius: 20px;
`;

export { InputField };
