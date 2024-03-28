import { useState } from "react";
import HiddenOptions from "./options/HiddenOptions";
import TopOptions from "./options/TopOptions";

const Options = () => {
  const [hiddenOptions, setHiddenOptions] = useState(true);

  return (
    <section>
      <TopOptions />
      {hiddenOptions ? (
        <HiddenOptions />
      ) : (
        <div>
          <label htmlFor="show">More Options</label>
          <input type="checkbox" name="show" id="show" />
        </div>
      )}
    </section>
  );
};

export default Options;
