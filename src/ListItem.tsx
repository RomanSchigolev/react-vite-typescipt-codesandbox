import { FC, memo } from "react";
import { User } from "./models";

interface ListItemProps {
  user: User;
}

export const ListItem: FC<ListItemProps> = memo(({ user }) => {
  return <li>{user.name}</li>;
});
