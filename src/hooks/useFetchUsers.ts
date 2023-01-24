import { useEffect, useState } from "react";
import { fetchUsers } from "../helpers/fetchUsers";
import { User } from "../models";

export const useFetchUsers = (): User[] => {
  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    fetchUsers().then((data) => {
      setUsers(data);
    });
  }, []);

  return users;
};
