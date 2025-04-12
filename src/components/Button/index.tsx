import { memo } from 'react';

interface ButtonProps {
  onClick: () => void;
  text: string;
}
const Button = memo((props: ButtonProps) => {
  const { onClick, text } = props;
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  );
});

export default Button;
