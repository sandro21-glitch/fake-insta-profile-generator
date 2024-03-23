import { useRef, useState } from "react";
import InputField from "../../../../../ui/InputField";
import useOutsideClickAndFocus from "../../../../../hooks/useOutsideClickAndFocus";

const FullName = () => {
  const [fullName, setFullName] = useState("Sandro Papidze");
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
    setFullName(e.target.value);
  };

  return (
    <div ref={containerRef} className="w-full mb-1">
      <h6
        onClick={() => setIsInputClicked(true)}
        className={`${
          isInputClicked ? "hidden" : "block"
        } font-semibold text-[15px]`}
      >
        {fullName}
      </h6>
      {isInputClicked && (
        <InputField
          onChange={handleInputChange}
          value={fullName}
          inputRef={inputRef}
        />
      )}
    </div>
  );
};

export default FullName;
