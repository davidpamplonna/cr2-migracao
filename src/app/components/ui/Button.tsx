import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  icon?: ReactNode;
}

export default function Button({
  variant = "primary",
  children,
  icon,
  className,
  ...props
}: Props) {
  const style = {
    primary:
      "bg-button-primary flex items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-button-primary/95 cursor-pointer",
    secondary:
      "bg-button-secondary flex items-center gap-2 text-white px-4 py-2 rounded-md hover:bg-button-secondary/95 cursor-pointer",
  };

    

  return (
    <button
      className={clsx(style[variant], className)}
      {...props}
    >
      {icon && icon}
      {children}
    </button>
  );
}
