import { useState } from "react";
import ShowHighlightsBtn from "./ShowHighlightsBtn";
import MainHighlights from "./mainHighlights/MainHighlights";

const Highlights = () => {
  const [showHighlights, setShowHighlights] = useState<boolean>(false);
  return (
    <div>
      <ShowHighlightsBtn
        setShowHighlights={setShowHighlights}
        showHighlights={showHighlights}
      />
      {showHighlights && <MainHighlights />}
    </div>
  );
};

export default Highlights;
