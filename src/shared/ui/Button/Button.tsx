import { FC, forwardRef } from "react";
import clsx from "clsx";
import { ButtonProps } from "./types/Button.types";
import styles from "./Button.module.scss";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      variant,
      className,
      children,
      disabled,
      fullWidth = false,
      ...rest
    } = props;

    return (
      <button
        ref={ref}
        {...rest}
        aria-label="Button"
        className={clsx(styles.button, variant && styles[variant], className)}
        disabled={disabled}
        data-full-width={fullWidth ?? false}
      >
        {children}
      </button>
    );
  }
);
