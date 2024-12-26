import { useEffect, useState } from 'react';
import { fetchUsers } from 'helpers';
import { type User } from 'models';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetchUsers<User[]>()
      .then((data) => {
        setUsers(data);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return [users, isLoading] as const;
};
