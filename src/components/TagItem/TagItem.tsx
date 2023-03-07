import { FC, memo } from 'react';
import styles from 'components/TagItem/TagItem.module.css';

interface TagItemProps {
  tag: string;
  onRemoveTag: (tag: string) => void;
}
export const TagItem: FC<TagItemProps> = memo(({ tag, onRemoveTag }) => {
  const handleRemoveTag = (tagForRemove: string) => () => {
    onRemoveTag(tagForRemove);
  };

  return (
    <li data-testid="tag" className={styles.tagItem}>
      <span data-testid="tag-text" className={styles.tagText}>
        {tag}
      </span>
      <button data-testid="tag-remove" type="button" className={styles.tagRemoveButton} onClick={handleRemoveTag(tag)}>
        ❌
      </button>
    </li>
  );
});

TagItem.displayName = 'MemoTagItem';
