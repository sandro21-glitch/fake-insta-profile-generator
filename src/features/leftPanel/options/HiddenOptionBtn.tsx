const HiddenOptionBtn = () => {
  return (
    <div className="flex items-center md:hidden cursor-pointer">
      <input
        onChange={() => setHiddenOptions(!hiddenOptions)}
        type="checkbox"
        name="show"
        id="show"
        className="cursor-pointer"
        checked={hiddenOptions}
      />
      <label htmlFor="show" className="ml-2 cursor-pointer">
        More Options
      </label>
    </div>
  );
};

export default HiddenOptionBtn;
