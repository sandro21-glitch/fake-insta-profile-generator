import { useState } from "react";
import HiddenOptions from "./options/HiddenOptions";
import TopOptions from "./options/TopOptions";

const Options = () => {
  const [hiddenOptions, setHiddenOptions] = useState(true);

  return (
    <section>
      <TopOptions />
      {hiddenOptions && <HiddenOptions />}
    </section>
  );
};

export default Options;
