import { OutlinedInput, styled } from "@mui/material";
import Colors from "./../../../theme/Colors";

const StyleInputField = styled(OutlinedInput)`
  height: 30px;
  border-radius: 20px;
  margin-top: ${(props) => props.marginTop};
  background-color: ${(props) => props?.readOnly && Colors.lightGreish};
`;

export const InputField = (props) => {
  
  return (
    <StyleInputField
      fullWidth
      type="number"
      {...props}
    />
  );
};

export const InputContainer = styled("div")`
  padding: 0 20px;
`;
