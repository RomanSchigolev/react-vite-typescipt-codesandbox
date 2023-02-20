import { ChangeEvent, useState } from 'react';
import { debounce } from 'helpers';

export const useInput = () => {
  const [query, setQuery] = useState('');
  const handleChangeQuery = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };
  const debouncedChangeQuery = debounce(handleChangeQuery, 500);

  return {
    query,
    renderInput: <input type="text" onChange={debouncedChangeQuery} />,
  };
};
