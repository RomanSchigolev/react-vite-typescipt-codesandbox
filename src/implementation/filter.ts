export const myFilter = <T>(
  array: T[],
  callback: (element: T, index: number, array: T[]) => boolean
) => {
  return array.reduce((acc, item, ind, arr) => {
    const result = callback(item, ind, arr);
    result && acc.push(item);
    return acc;
  }, [] as T[]);
};
