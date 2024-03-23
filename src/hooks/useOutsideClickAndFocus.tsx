import { useEffect, RefObject } from "react";

type UseOutsideClickAndFocusProps = {
  containerRef: RefObject<HTMLDivElement>;
  inputRef: RefObject<HTMLInputElement>;
  isInputClicked: boolean;
  setIsInputClicked: (value: boolean) => void;
};

const useOutsideClickAndFocus = ({
  containerRef,
  inputRef,
  isInputClicked,
  setIsInputClicked,
}: UseOutsideClickAndFocusProps) => {
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsInputClicked(false);
      }
    };

    const handleFocusInput = () => {
      if (isInputClicked && inputRef.current) {
        inputRef.current.focus();
        inputRef.current.select();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    handleFocusInput();

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef, inputRef, isInputClicked, setIsInputClicked]);
};

export default useOutsideClickAndFocus;
