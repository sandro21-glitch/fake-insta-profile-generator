import { useRef, useState } from "react";
import useOutsideClickAndFocus from "../../../../../../hooks/useOutsideClickAndFocus";
import InputField from "../../../../../../ui/InputField";

const Followers = () => {
  const [followers, setFollowers] = useState<string>("150K");
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
    setFollowers(e.target.value);
  };

  return (
    <div className="w-1/3 text-center" ref={containerRef}>
      <p
        onClick={() => setIsInputClicked(true)}
        className={` ${isInputClicked ? "hidden" : "block"}`}
      >
        {followers}
      </p>
      {isInputClicked && (
        <InputField
          onChange={handleInputChange}
          value={followers}
          inputRef={inputRef}
          className="w-full text-center"
        />
      )}
      <p>Followers</p>
    </div>
  );
};

export default Followers;
