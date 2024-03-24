import { useRef, useState } from "react";
import useOutsideClickAndFocus from "../../../../../hooks/useOutsideClickAndFocus";
import ButtonSection from "./profileLinks/ButtonSection";
import ProfileLinkDisplay from "./profileLinks/ProfileLinkDisplay";
const ProfileLinks = () => {
  const [link, setLink] = useState<string>("");
  const [linkCount, setLinkCount] = useState<string>("");
  const [isBtnClicked, setIsBtnClicked] = useState<boolean>(false);
  const [isOtherClicked, setIsOtherClicked] = useState<boolean>(false);
  const [isInputClicked, setIsInputClicked] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useOutsideClickAndFocus({
    containerRef,
    inputRef,
    isInputClicked,
    setIsInputClicked,
  });

  const handleClickFb = () => {
    if (link !== "") {
      setLinkCount("1");
      setIsBtnClicked(true);
    } else {
      setLink("Facebook profile");
      setIsBtnClicked(true);
    }
  };
  const handleClickOther = () => {
    if (link !== "") {
      setLinkCount("1");
      setIsOtherClicked(true);
    } else {
      setLink("Enter link text");
      setIsOtherClicked(true);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLink(e.target.value);
  };

  return (
    <div className="mt-[8px]">
      {(isBtnClicked || isOtherClicked) && (
        <ProfileLinkDisplay
          link={link}
          linkCount={linkCount}
          setLinkCount={setLinkCount}
          containerRef={containerRef}
          isInputClicked={isInputClicked}
          setIsInputClicked={setIsInputClicked}
          inputRef={inputRef}
          handleInputChange={handleInputChange}
        />
      )}
      <ButtonSection
        isBtnClicked={isBtnClicked}
        isOtherClicked={isOtherClicked}
        handleClickFb={handleClickFb}
        handleClickOther={handleClickOther}
      />
    </div>
  );
};

export default ProfileLinks;
