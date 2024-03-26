import { RxLink2 } from "react-icons/rx";
import { CiFacebook } from "react-icons/ci";
import InputField from "../../../../../../ui/InputField";
import LinkCount from "./LinkCount";

interface ProfileLinkDisplayProps {
  link: string;
  linkCount: string;
  containerRef: React.RefObject<HTMLDivElement>;
  isInputClicked: boolean;
  setIsInputClicked: React.Dispatch<React.SetStateAction<boolean>>;
  inputRef: React.RefObject<HTMLInputElement>;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setLinkCount: (link: string) => void;
}

const ProfileLinkDisplay: React.FC<ProfileLinkDisplayProps> = ({
  link,
  linkCount,
  containerRef,
  isInputClicked,
  setIsInputClicked,
  inputRef,
  handleInputChange,
  setLinkCount,
}) => {
  return (
    <div className="flex items-center text-[14px]">
      {link.toLowerCase() === "facebook profile" ? (
        <div className="flex items-center text-fbLink">
          <CiFacebook className="mr-1 text-fbLink" size={20} />
          {link}
        </div>
      ) : (
        <div
          className="flex items-center text-fbLink"
          ref={containerRef}
          onClick={() => setIsInputClicked(true)}
        >
          {isInputClicked ? (
            <InputField
              value={link}
              inputRef={inputRef}
              onChange={handleInputChange}
            />
          ) : (
            <>
              <RxLink2 className="mr-1 text-blue-800" size={20} />
              {link.length > 15 ? link.slice(0, 15) + "..." : link}
            </>
          )}
        </div>
      )}
      {linkCount !== "" && (
        <LinkCount linkCount={linkCount} setLinkCount={setLinkCount} />
      )}
    </div>
  );
};

export default ProfileLinkDisplay;
