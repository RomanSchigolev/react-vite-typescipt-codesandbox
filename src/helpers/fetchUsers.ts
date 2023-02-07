import { User } from "models";

export const fetchUsers = (): Promise<User[]> => {
  const response = fetch("https://jsonplaceholder.typicode.com/users").then(
    (response) => response.json()
  );
  return response;
};
