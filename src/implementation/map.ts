export const myMap = <T, R>(array: T[], callback: (element: T, index: number, array: T[]) => R) => {
  return array.reduce((acc, item, ind, arr) => {
    acc.push(callback(item, ind, arr));
    return acc;
  }, [] as R[]);
};
