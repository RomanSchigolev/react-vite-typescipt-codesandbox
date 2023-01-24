import { FC, memo, useMemo } from "react";
import { ListItem } from "./ListItem";
import { User } from "./models";

interface ListProps {
  users: User[];
  query: string;
}

export const List: FC<ListProps> = memo(({ users, query }) => {
  const filteredUsers = useMemo(() => {
    return !query
      ? users
      : users.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase())
        );
  }, [users, query]);

  if (filteredUsers.length === 0) {
    return <p>Empty</p>;
  }

  return (
    <ul>
      {filteredUsers.map((user) => (
        <ListItem key={user.id} user={user} />
      ))}
    </ul>
  );
});
