import React from "react";
import { Card as MuiCard, CardContent, styled } from "@mui/material";

const LayoutCard = styled(MuiCard)`
  padding: 20;
  height: 100vh;
  background-color: #1035a4;
`;

const Layout = (props) => (
  <LayoutCard {...props}>
    <CardContent>{props?.children}</CardContent>
  </LayoutCard>
);

export { Layout };
