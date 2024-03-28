import { useState } from "react";
import HiddenOptions from "./options/HiddenOptions";
import TopOptions from "./options/TopOptions";
import HiddenOptionBtn from "./options/HiddenOptionBtn";

const Options = () => {
  const [hiddenOptions, setHiddenOptions] = useState(true);

  return (
    <section>
      <TopOptions />
      {hiddenOptions && <HiddenOptions />}
      <HiddenOptionBtn
        hiddenOptions={hiddenOptions}
        setHiddenOptions={setHiddenOptions}
      />
    </section>
  );
};

export default Options;
