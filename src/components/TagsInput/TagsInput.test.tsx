import { describe, it, vi } from 'vitest';
import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TagsInput } from 'components';

describe('TagsInput', () => {
  it('should be in the document', () => {
    const onChange = vi.fn();

    render(<TagsInput onChange={onChange} />);

    expect(screen.getByTestId('tag-input')).toBeInTheDocument();
  });
  it('should be able to add tag when pressed enter', async () => {
    const onChangeFn = vi.fn();

    render(<TagsInput onChange={onChangeFn} />);

    const elementInput = screen.getByTestId('tag-input');

    await userEvent.type(elementInput, 'tag{enter}');

    expect(onChangeFn).toBeCalledTimes(1);
  });
  it('should add tag when typing comma', async () => {
    const onChangeFn = vi.fn();

    render(<TagsInput onChange={onChangeFn} />);

    const elementInput = screen.getByTestId('tag-input');

    await userEvent.type(elementInput, 'tag,');

    expect(onChangeFn).toBeCalledTimes(1);
  });
});
