import { useEffect, useState } from 'react';
import { fetchUsers } from 'helpers';
import { User } from 'models';

export const useFetchUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    setIsloading(true);
    fetchUsers()
      .then((data) => {
        setUsers(data);
      })
      .finally(() => {
        setIsloading(false);
      });
  }, []);

  return [users, isLoading] as const;
};
