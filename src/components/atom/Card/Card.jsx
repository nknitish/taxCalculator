import {
  Card as MuiCard,
  CardContent,
  CardHeader,
  styled,
} from "@mui/material";
import React from "react";

const Card = styled(({ title, subheader, ...props }) => (
  <MuiCard {...props} raised>
    {title && <CardHeader title={title} subheader={subheader} />}
    <CardContent children={props?.children} />
  </MuiCard>
))`
  border-radius: 20px;
  margin-top: ${(props) => props.marginTop};
`;

const ParentCard = styled(Card)`
  border-radius: 30px 30px 0 0;
  height: 85vh;
`;

export { Card, ParentCard };
