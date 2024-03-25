import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  disabled?: boolean;
  children: ReactNode;
  fullWidth?: boolean;
}
