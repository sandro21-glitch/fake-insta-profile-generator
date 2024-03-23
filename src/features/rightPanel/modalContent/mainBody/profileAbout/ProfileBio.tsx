import { useRef, useState, useEffect } from "react";
import TextareaField from "../../../../../ui/TextareaField";

const ProfileBio = () => {
  const [bio, setBio] = useState("Instagram Is Very Nice App..");
  const [isInputClicked, setIsInputClicked] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

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
      if (isInputClicked && textareaRef.current) {
        textareaRef.current.focus();
        textareaRef.current.select();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);
    handleFocusInput();

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [containerRef, isInputClicked]);

  const handleTextareaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBio(e.target.value);
  };

  return (
    <div ref={containerRef} className="w-full">
      <span
        className={`w-[70%] text-modalHeaderSize leading-[18px] break-words whitespace-break-spaces ${
          isInputClicked ? "hidden" : "inline-block"
        }`}
        onClick={() => setIsInputClicked(true)}
      >
        {bio}
      </span>
      {isInputClicked && (
        <TextareaField
          ref={textareaRef}
          value={bio}
          onChange={handleTextareaChange}
          className="text-modalHeaderSize"
        />
      )}
    </div>
  );
};

export default ProfileBio;
