import React, { useState, useRef } from "react";
import { LuLock } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import useOutsideClick from "../../../../../hooks/useOutsideClick";

const InstaUsername: React.FC = () => {
  const [isInputClicked, setIsInputClicked] = useState<boolean>(false);
  const [instaName, setInstaName] = useState<string>("Sandro");
  const inputRef = useRef<HTMLInputElement>(null);

  const containerRef = useRef<HTMLLIElement>(null);

  useOutsideClick(containerRef, () => {
    setIsInputClicked(false);
  });

  return (
    <li
      ref={containerRef}
      className="flex items-center text-[16px] font-semibold"
    >
      <LuLock size={15} />
      <span
        className={`mx-1 ${isInputClicked ? "hidden" : "block"}`}
        onClick={() => setIsInputClicked(true)}
      >
        {instaName}
      </span>
      {isInputClicked && (
        <input
          ref={inputRef}
          type="text"
          value={instaName}
          onChange={(e) => setInstaName(e.target.value)}
          className="outline-none border-b-black border-b border-dashed mx-1"
        />
      )}
      <IoIosArrowDown />
    </li>
  );
};

export default InstaUsername;
