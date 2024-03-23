import { useRef, useState } from "react";
import InputField from "../../../../../../ui/InputField";
import useOutsideClickAndFocus from "../../../../../../hooks/useOutsideClickAndFocus";

const Following = () => {
  const [following, setFollowing] = useState<string>("50");
  const [isInputClicked, setIsInputClicked] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useOutsideClickAndFocus({
    containerRef,
    inputRef,
    isInputClicked,
    setIsInputClicked,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFollowing(e.target.value);
  };

  return (
    <div className="w-1/3 text-center" ref={containerRef}>
      <p
        onClick={() => setIsInputClicked(true)}
        className={`mb-1 ${isInputClicked ? "hidden" : "block"}`}
      >
        {following}
      </p>
      {isInputClicked && (
        <InputField
          onChange={handleInputChange}
          value={following}
          inputRef={inputRef}
          className="w-full text-center"
        />
      )}
      <p>Following</p>
    </div>
  );
};

export default Following;
