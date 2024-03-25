import { useAppSelector } from "../../../../../../hooks/reduxHooks";
import HighlightsBar from "./HighlightsBar";
import HighlightsList from "./HighlightsList";

const MainHighlights = () => {
  const { highlights } = useAppSelector((store) => store.highlights);
  const isHighlightsEmpty = highlights.length < 1;
  return (
    <div className="overflow-scroll">
      {isHighlightsEmpty && <HighlightsBar />}
      <HighlightsList />
    </div>
  );
};

export default MainHighlights;
