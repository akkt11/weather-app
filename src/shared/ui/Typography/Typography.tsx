import clsx from "clsx";
import { FC, ReactNode, createElement } from "react";
import { ITags, TypographyProps } from "./types/Typography.types";
import style from "./Typography.module.scss";

export const Typography: FC<TypographyProps> = (props) => {
  const {
    variant,
    weight = "regular",
    className,
    color = "",
    children,
    format,
    symbol,
  } = props;

  const Tags = {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6",
    paragraph: "p",
    caption: "p",
    link: "a",
  };

  const classNameGenerated = clsx(
    style[variant],
    style[weight],
    style[color],
    className
  );

  const formatString = (word: ReactNode) => {
    if (typeof word !== "string") return "";

    if (format === "capitalize") {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }
    if (format === "uppercase") {
      return word.toUpperCase();
    }
  };

  const showSymbol = (type?: string) => {
    if (type === "c") {
      return "°C";
    }
    if (type === "f") {
      return "°F";
    }
    if (type === "km") {
      return "km/h";
    }
    if (type === "temp") {
      return "°";
    }
    if (type === "pct") {
      return "%";
    }
    return "";
  };

  return createElement(
    Tags[variant as keyof ITags],
    { className: classNameGenerated },
    format ? formatString(children) : children,
    symbol ? showSymbol(symbol) : null
  );
};
