import {
  Avatar,
  List as MuiList,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { Text } from "../Text/Text";

const List = ({ data }) => {
  return (
    <MuiList dense={false}>
      {data?.map(({ label, secondaryText, icon }) => (
        <ListItem key={label}>
          <ListItemAvatar>
            <Avatar>{icon}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={<Text text={label} />}
            secondary={secondaryText}
          />
        </ListItem>
      ))}
    </MuiList>
  );
};

export { List };
