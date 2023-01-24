import { FC, memo, MouseEventHandler } from "react";

interface ButtonProps {
  onClick: MouseEventHandler;
}

export const Button: FC<ButtonProps> = memo(({ onClick }) => {
  return <button onClick={onClick}>Click Me</button>;
});
