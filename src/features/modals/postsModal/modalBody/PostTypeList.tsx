import { useState } from "react";

type TypeListTypes = {
  setPostType: (type: string) => void;
};

const PostTypeList = ({ setPostType }: TypeListTypes) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleInputChange = (newValue: string) => {
    setInputValue(newValue);
    setPostType(newValue);
  };

  return (
    <ul className="grid grid-cols-2 gap-3">
      <li>
        <label
          htmlFor="single"
          className="normal-case flex items-center gap-2 cursor-pointer"
        >
          <input
            id="single"
            type="radio"
            checked={inputValue === "single"}
            onChange={() => handleInputChange("single")}
          />
          Single post
        </label>
      </li>
      <li>
        <label
          htmlFor="multiple"
          className="normal-case flex items-center gap-2 cursor-pointer"
        >
          <input
            id="multiple"
            type="radio"
            checked={inputValue === "multiple"}
            onChange={() => handleInputChange("multiple")}
          />
          Multiple Post
        </label>
      </li>
      <li>
        <label
          htmlFor="reel"
          className="normal-case flex items-center gap-2 cursor-pointer"
        >
          <input
            id="reel"
            type="radio"
            checked={inputValue === "reel"}
            onChange={() => handleInputChange("reel")}
          />
          Reel
        </label>
      </li>
      <li>
        <label
          htmlFor="pin"
          className="normal-case flex items-center gap-2 cursor-pointer"
        >
          <input
            id="pin"
            type="radio"
            checked={inputValue === "pin"}
            onChange={() => handleInputChange("pin")}
          />
          Pin
        </label>
      </li>
    </ul>
  );
};

export default PostTypeList;
