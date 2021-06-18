import * as React from "react";
import Box from "../Box";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

const Button = React.forwardRef<HTMLButtonElement, IButton>(function Button(
  { children, className, ...props },
  ref
) {
  return (
    <button role="button" aria-labelledby={undefined} ref={ref} {...props}>
      {children}
    </button>
  );
});

Button.displayName = "Button";

export default Box(Button);
