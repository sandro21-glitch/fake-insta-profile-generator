type InputFieldTypes = {
  inputRef?: React.RefObject<HTMLInputElement>;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
};

const InputField = ({
  inputRef,
  value,
  onChange,
  className,
}: InputFieldTypes) => {
  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={onChange}
      className={`outline-none border-b-black border-b border-dashed mx-1 ${className}`}
    />
  );
};

export default InputField;
