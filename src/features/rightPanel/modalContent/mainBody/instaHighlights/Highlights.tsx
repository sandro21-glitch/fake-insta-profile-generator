import { useState } from "react";
import ShowHighlightsBtn from "./ShowHighlightsBtn";
import MainHighlights from "./mainHighlights/MainHighlights";
import { useAppSelector } from "../../../../../hooks/reduxHooks";

const Highlights = () => {
  const [showHighlights, setShowHighlights] = useState<boolean>(false);
  const { highlights } = useAppSelector((store) => store.highlights);
  const isHighlightsEmpty = highlights.length < 1;
  return (
    <div>
      {isHighlightsEmpty && (
        <ShowHighlightsBtn
          setShowHighlights={setShowHighlights}
          showHighlights={showHighlights}
        />
      )}
      {showHighlights && <MainHighlights />}
    </div>
  );
};

export default Highlights;
