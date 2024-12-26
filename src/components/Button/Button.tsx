import { ButtonHTMLAttributes, FC, memo, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: FC<PropsWithChildren<ButtonProps>> = memo((props) => {
  const { children, ...resProps } = props;
  return <button {...resProps}>{children}</button>;
});

Button.displayName = 'MemoButton';
