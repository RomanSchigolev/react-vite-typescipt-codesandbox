export async function fetchUsers<T>(): Promise<T> {
  try {
    const response = fetch('https://jsonplaceholder.typicode.com/users');
    const data = (await response).json();
    return data;
  } catch (error) {
    return error;
  }
}
