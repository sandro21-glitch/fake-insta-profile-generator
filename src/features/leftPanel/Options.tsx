import { useState } from "react";
import HiddenOptions from "./options/HiddenOptions";
import TopOptions from "./options/TopOptions";

const Options = () => {
  const [hiddenOptions, setHiddenOptions] = useState(false);

  return (
    <section>
      <TopOptions />
      {hiddenOptions && <HiddenOptions />}
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
    </section>
  );
};

export default Options;
