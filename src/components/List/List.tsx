import { FC, memo, useMemo } from 'react';
import { ListItem } from 'components';
import { useFetchUsers } from 'hooks';

interface ListProps {
  query: string;
}

export const List: FC<ListProps> = memo(({ query }) => {
  const [users, isLoading] = useFetchUsers();

  const filteredUsers = useMemo(() => {
    return !query ? users : users.filter((user) => user.username.toLowerCase().includes(query.toLowerCase()));
  }, [users, query]);

  if (isLoading) {
    return <p>Loading...</p>;
  }

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

List.displayName = 'MemoList';
