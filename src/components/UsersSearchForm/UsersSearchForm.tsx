import { FC } from 'react';
import { useInput } from 'hooks';
import { List } from 'components';

export const UsersSearchForm: FC = () => {
  const { query, renderInput } = useInput();

  return (
    <div>
      <div>{renderInput}</div>
      <List query={query} />
    </div>
  );
};
