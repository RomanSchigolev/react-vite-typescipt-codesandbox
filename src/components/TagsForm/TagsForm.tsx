import { FC, useCallback, useState } from 'react';
import { TagList, TagsInput } from 'components';
import styles from 'components/TagsInput/TagsInput.module.css';

export const TagsForm: FC = () => {
  const [tags, setTags] = useState<string[]>(['React', 'Redux', 'MobX', 'Jest']);

  const handleRemoveTag = useCallback((tagForRemove: string) => {
    setTags((prev) => prev.filter((tag) => tag !== tagForRemove));
  }, []);

  return (
    <div className={styles.wrapper}>
      <TagList tags={tags} onRemoveTag={handleRemoveTag} />
      <TagsInput onChange={setTags} />
    </div>
  );
};
