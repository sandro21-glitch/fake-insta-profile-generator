import { useRef, useState } from "react";
import InputField from "../../../../../../ui/InputField";
import useOutsideClickAndFocus from "../../../../../../hooks/useOutsideClickAndFocus";

type LinkCountTypes = {
  linkCount: string;
  setLinkCount: (link: string) => void;
};
const LinkCount = ({ linkCount, setLinkCount }: LinkCountTypes) => {
  const [isInputClicked, setIsInputClicked] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useOutsideClickAndFocus({
    containerRef,
    inputRef,
    isInputClicked,
    setIsInputClicked,
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLinkCount(e.target.value);
  };

  return (
    <div ref={containerRef}>
      {isInputClicked ? (
        <InputField
          value={linkCount}
          inputRef={inputRef}
          onChange={handleInputChange}
        />
      ) : (
        <p onClick={() => setIsInputClicked(true)} className="ml-1 text-fbLink lowercase">
          and {linkCount} other link
        </p>
      )}
    </div>
  );
};

export default LinkCount;
