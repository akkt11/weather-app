import { CSSProperties, FC, ReactNode } from "react";
import clsx from "clsx";
import {
  ButtonProps,
  ButtonSize,
  ButtonType,
  ButtonVariant,
  ButtonIconPosition,
} from "./types/Button.types";
import { buttonConfigs } from "./config/Button.config";
import style from "./Button.module.scss";

const renderButtonContent = (
  isLoading?: boolean,
  iconPosition?: ButtonIconPosition,
  icon?: ReactNode,
  loadingText?: string,
  children?: ReactNode
) => (
  <>
    {isLoading && (
      <span className={style.loader}>{loadingText || "Loading"}</span>
    )}
    {iconPosition === "left" && icon}
    {children}
    {iconPosition === "right" && icon}
  </>
);

const commonProps = (
  type: ButtonType,
  size?: ButtonSize,
  variant?: ButtonVariant,
  isLoading?: boolean,
  iconPosition?: ButtonIconPosition,
  customClasses?: string,
  customStyle?: CSSProperties,
  ariaLabel?: string,
  rest?: Record<string, unknown>
) => ({
  className: clsx(
    style[buttonConfigs[type]?.classes],
    size && style[`btn-${size}`],
    variant && style[`btn-${variant}`],
    isLoading && style["loading"],
    iconPosition === "right" && style["icon-right"],
    customClasses
  ),
  customStyle,
  "aria-label": ariaLabel || "Button",
  ...rest,
});

export const Button: FC<ButtonProps> = ({
  type,
  size,
  variant,
  isLoading,
  iconPosition = "left",
  customClasses,
  customStyle,
  ariaLabel,
  children,
  ...props
}) => {
  const { icon, ...rest } = buttonConfigs[type] || {};
  const { onClick } = props;

  return (
    <button
      type="button"
      disabled={props.disabled || isLoading}
      onClick={onClick}
      {...commonProps(
        type,
        size,
        variant,
        isLoading,
        iconPosition,
        customClasses,
        customStyle,
        ariaLabel,
        rest
      )}
    >
      {renderButtonContent(
        isLoading,
        iconPosition,
        icon,
        props.loadingText,
        children
      )}
    </button>
  );
};
