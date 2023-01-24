export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  callback: F,
  waitFor = 500
): (...args: Parameters<F>) => void {
  let timeout: number | undefined;

  return (...args: Parameters<F>): void => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => callback(...args), waitFor);
  };
}
