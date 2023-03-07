import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SwitchingContent } from 'components';

describe('SwitchingContent', () => {
  it('the component must be rendered', () => {
    render(<SwitchingContent />);
    expect(screen.getByTestId('switchingContent')).toBeInTheDocument();
  });
  it('the text should be invisible', () => {
    render(<SwitchingContent />);
    expect(screen.queryAllByText(/some text/i)).toHaveLength(0);
  });
  it('the text should be visible when the button is clicked', async () => {
    render(<SwitchingContent />);
    const button = screen.getByRole('button', { name: /click me/i });
    expect(button).toBeInTheDocument();
    await userEvent.click(button);
    expect(screen.getByText(/some text/i)).toBeInTheDocument();
  });
});
