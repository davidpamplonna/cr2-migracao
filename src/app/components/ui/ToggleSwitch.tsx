import { ButtonHTMLAttributes, forwardRef } from "react";
import clsx from "clsx";

interface ToggleSwitchProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked: boolean;
  onChange: (value: boolean) => void;
  label?: React.ReactNode;
  disabled?: boolean;
}

const ToggleSwitch = forwardRef<HTMLButtonElement, ToggleSwitchProps>(
  (
    { checked, onChange, disabled = false, className, label, ...props },
    ref
  ) => {
    const handleToggle = () => {
      if (disabled) return;
      onChange(!checked);
    };

    const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
      if (disabled) return;
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        onChange(!checked);
      }
      if (props.onKeyDown) props.onKeyDown(e);
    };

    return (
      <div className={clsx("inline-flex items-center gap-3", className)}>
        {label && <span className="text-sm select-none">{label}</span>}

        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={checked}
          aria-disabled={disabled}
          disabled={disabled}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          className={clsx(
            "relative inline-flex h-7 w-14 items-center rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
            checked ? "bg-primary" : "bg-border",
            disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
          )}
          {...props}
        >
          <span
            className={clsx(
              "inline-block bg-white h-6 w-6 rounded-full transition-transform duration-300",
              checked ? "translate-x-7" : "translate-x-1"
            )}
          />
        </button>
      </div>
    );
  }
);

ToggleSwitch.displayName = "ToggleSwitch";

export default ToggleSwitch;
