const HighlightNameInput = () => {
  return (
    <div className="text-modalHeaderSize flex flex-col mb-[15px]">
      <label htmlFor="name" className="mb-[5px] font-semibold">
        Name:
      </label>
      <input
        id="name"
        type="text"
        className="outline-none border border-gray-300 rounded-md p-2"
        placeholder="Enter Name"
      />
    </div>
  );
};

export default HighlightNameInput;
