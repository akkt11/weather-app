import clsx from "clsx";
import { FC, createElement } from "react";
import { ITags, TypographyProps } from "./types/Typography.types";
import style from "./Typography.module.scss";

export const Typography: FC<TypographyProps> = (props) => {
  const {
    variant,
    weight = "regular",
    className,
    color = "",
    children,
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
  };

  const classNameGenerated = clsx(
    style[variant],
    style[weight],
    style[color],
    className
  );

  return createElement(
    Tags[variant as keyof ITags],
    { className: classNameGenerated },
    children
  );
};
