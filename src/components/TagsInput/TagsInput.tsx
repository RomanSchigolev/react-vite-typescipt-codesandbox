import { FC, Dispatch, useState, ChangeEvent, memo, KeyboardEvent } from 'react';
import styles from 'components/TagsInput/TagsInput.module.css';

interface TagsInputProps {
  onChange: Dispatch<React.SetStateAction<string[]>>;
}

export const TagsInput: FC<TagsInputProps> = memo(({ onChange }) => {
  const [tagValue, setTagValue] = useState('');

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    const isEnter = event.code === 'Enter';
    const value = event.currentTarget.value;

    if (!isEnter) return;

    if (!value.length) return;

    onChange((prev) => [...prev, value]);
    setTagValue('');
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (/^,/g.test(value)) return;

    if (!value.includes(',')) {
      setTagValue(value);
      return;
    }

    const values = value.split(',');
    const lastValue = values.pop();

    if (!values.length) return;

    setTagValue(lastValue || '');

    onChange((prev) => [...prev, tagValue]);
  };

  return (
    <input
      data-testid="tag-input"
      type="text"
      className={styles.input}
      value={tagValue}
      onChange={handleChange}
      onKeyDown={handleKeyDown}
    />
  );
});

TagsInput.displayName = 'MemoTagsInput';
