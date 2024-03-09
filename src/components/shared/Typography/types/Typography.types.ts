import { ReactNode } from "react";

export interface ITags {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
  paragraph: string;
  caption: string;
}

export type TypographyVariants =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h6"
  | "body"
  | "caption";

export type ColorVariants = "black" | "white" | "orange";

export type WeightVariants = "regular" | "medium" | "semibold" | "bold";

export interface TypographyProps {
  variant: TypographyVariants;
  weight?: WeightVariants;
  className?: string;
  color?: ColorVariants;
  children: ReactNode;
}
