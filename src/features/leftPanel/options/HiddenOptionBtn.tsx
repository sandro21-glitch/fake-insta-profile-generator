type HiddenOptionBtnTypes = {
  hiddenOptions: boolean;
  setHiddenOptions: (open: boolean) => void;
};

const HiddenOptionBtn = ({
  hiddenOptions,
  setHiddenOptions,
}: HiddenOptionBtnTypes) => {
  return (
    <div className="flex items-center lg:hidden cursor-pointer">
      <input
        onChange={() => setHiddenOptions(!hiddenOptions)}
        type="checkbox"
        name="show"
        id="show"
        className="cursor-pointer"
        checked={hiddenOptions}
      />
      <label htmlFor="show" className="ml-2 cursor-pointer text-headerSize font-bold">
        More Options
      </label>
    </div>
  );
};

export default HiddenOptionBtn;
