import { FC, memo } from 'react';
import { TagItem } from 'components';
import styles from 'components/TagList/TagList.module.css';

interface TagListProps {
  tags: string[];
  onRemoveTag: (tag: string) => void;
}

export const TagList: FC<TagListProps> = memo(({ tags, onRemoveTag }) => {
  return (
    <ul className={styles.tagList}>
      {tags.map((tag) => (
        <TagItem key={tag} tag={tag} onRemoveTag={onRemoveTag} />
      ))}
    </ul>
  );
});

TagList.displayName = 'MemoTagList';
