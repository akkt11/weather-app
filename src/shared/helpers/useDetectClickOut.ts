import { useEffect, useRef, useState } from "react";

export const useDetectClickOut = (initState: boolean) => {
  const triggerRef = useRef<HTMLButtonElement>(null);
  const nodeRef = useRef<HTMLMenuElement>(null);

  const [show, setShow] = useState(initState);

  const handleClickOutside = (e: MouseEvent) => {
    if (nodeRef.current && !nodeRef.current.contains(e.target as Node)) {
      return setShow(false);
    }

    if (triggerRef.current && triggerRef.current.contains(e.target as Node)) {
      return setShow(!show);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);

    return () =>
      document.removeEventListener("click", handleClickOutside, true);
  });

  return {
    triggerRef,
    nodeRef,
    show,
    setShow,
  };
};
