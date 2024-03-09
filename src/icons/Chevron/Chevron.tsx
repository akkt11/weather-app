import { FC } from "react";
import { ChevronProps } from "./types/Chevron.types";

export const Chevron: FC<ChevronProps> = (props) => {
  switch (props.type) {
    case "right": {
      return (
        <svg
          width="11"
          height="21"
          viewBox="0 0 11 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 20L10 10.5L1 1"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    }
  }
};
