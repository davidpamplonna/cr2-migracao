import React, { forwardRef, useId, InputHTMLAttributes } from "react";
import clsx from "clsx";

type InputVariant = "search" | "login" | "form";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: React.ReactNode;
  variant?: InputVariant;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { label, icon, variant = "login", className, id, type = "text", ...props },
    ref
  ) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;

    return (
      <div className="w-full">
        {label && (variant === "login" || variant === "form") && (
          <label
            htmlFor={inputId}
            className="mb-2 block text-sm font-medium tracking-wide text-muted-foreground"
          >
            {label}<span className="text-red-500/80 ml-1">*</span>
          </label>
        )}

        <div
          className={clsx(
            "relative flex items-center",
            variant === "search" && "rounded-lg border border-border px-4 py-3",
            variant === "login" && "border-b border-border",
            variant === 'form' && "bg-bg-form p-3 rounded-md"
          )}
        >
          <input
            id={inputId}
            ref={ref}
            type={type}
            {...props}
            className={clsx(
              "w-full bg-transparent outline-none placeholder:text-muted-foreground focus:outline-none ",
              props.disabled && "opacity-50 cursor-not-allowed",
              variant === "search" && "pr-10 text-sm placeholder:text-sm",
              variant === "login" && "py-2 text-base placeholder:text-sm",
              variant === "form" && 'placeholder:text-sm placeholder:text-gray-600 text-sm'
            )}
          />

          {icon && variant === "search" && (
            <span className="pointer-events-none absolute right-3 text-muted-foreground">
              {icon}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
