import { useRef, useState } from "react";
import InputField from "../../../../../../ui/InputField";
import useOutsideClickAndFocus from "../../../../../../hooks/useOutsideClickAndFocus";

const Posts = () => {
  const [post, setPost] = useState<string>("100");
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
    setPost(e.target.value);
  };

  return (
    <div className="w-1/3 text-center" ref={containerRef}>
      <p
        className={`mb-1 ${isInputClicked ? "hidden" : "block"}`}
        onClick={() => setIsInputClicked(true)}
      >
        {post}
      </p>
      {isInputClicked && (
        <InputField
          className="w-full text-center"
          value={post}
          onChange={handleInputChange}
          inputRef={inputRef}
        />
      )}
      <p>posts</p>
    </div>
  );
};

export default Posts;
