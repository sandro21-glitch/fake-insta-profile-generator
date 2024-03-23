import React from "react";

type TextareaFieldTypes = {
  ref?: React.RefObject<HTMLTextAreaElement>; 
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
};

const TextareaField = ({
  ref,
  value,
  onChange,
  className,
}: TextareaFieldTypes) => {
  return (
    <textarea
      ref={ref}
      value={value}
      onChange={onChange}
      className={`resize-none outline-none border-b-black border-b border-dashed mx-1 max-h-[4rem] overflow-y-scroll ${className}`}
    />
  );
};

export default TextareaField;
