import React from "react";
import { Card as MuiCard, CardContent, styled } from "@mui/material";

const StyledCard = styled(MuiCard)`
  margin: 20px;
`;
const Card = (props) => (
  <StyledCard {...props}>
    <CardContent>{props?.children}</CardContent>
  </StyledCard>
);

export { Card };
