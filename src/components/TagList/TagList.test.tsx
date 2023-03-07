import { render, screen, getByTestId } from '@testing-library/react';
import { describe, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { TagList } from 'components/TagList';

describe('TagList', () => {
  it('should render passed tags', () => {
    const tags = ['a', 'b', 'c'];
    const onRemoveTagFn = vi.fn();

    render(<TagList tags={tags} onRemoveTag={onRemoveTagFn} />);

    const elements = screen.getAllByTestId('tag');

    expect(elements.length).toBe(tags.length);

    tags.forEach((tag, index) => {
      const tagElement = elements[index];
      expect(tagElement).toHaveTextContent(tag);
    });
  });
  it('should be able to remove tag', async () => {
    const tags = ['a', 'b', 'c'];
    const onRemoveTagFn = vi.fn();

    render(<TagList tags={tags} onRemoveTag={onRemoveTagFn} />);

    const element = screen.getAllByTestId('tag')[0];
    const elementText = getByTestId(element, 'tag-text');
    const elementRemove = getByTestId(element, 'tag-remove');

    await userEvent.click(elementRemove);

    expect(onRemoveTagFn).toBeCalledTimes(1);
    expect(onRemoveTagFn).toBeCalledWith(elementText.textContent);
  });
});
