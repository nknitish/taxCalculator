import React from "react";
import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  styled,
} from "@mui/material";

const StyledCard = styled(MuiCard)`
  margin: 20px;
  border-radius: 20px;
`;

const ParentStyledCard = styled(MuiCard)`
  border-radius: 40px 40px 0 0;
  margin: 20px;
  height: 80vh;
  margin-top: 20vh;
`;

const Card = (props) => (
  <StyledCard {...props} raised>
    <CardContent children={props?.children} />
  </StyledCard>
);

const ParentCard = (props) => (
  <ParentStyledCard {...props} raised>
    {/* <CardHeader
      title="Hello"
      subheader="World"
      // disableTypography
      // style={{ backgroundColor: "red" }}
    /> */}
    <CardContent children={props?.children} />
  </ParentStyledCard>
);

export { Card, ParentCard };
