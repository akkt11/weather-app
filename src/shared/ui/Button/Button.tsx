import clsx from "clsx";
import { forwardRef } from "react";

import styles from "./Button.module.scss";
import { ButtonProps } from "./types/Button.types";

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
  },
);
