import { MdKeyboardArrowDown } from "react-icons/md";

type HighlightsBtnTypes = {
  setShowHighlights: (show: boolean) => void;
  showHighlights: boolean;
};

const ShowHighlightsBtn = ({
  setShowHighlights,
  showHighlights,
}: HighlightsBtnTypes) => {
  return (
    <button
      onClick={() => setShowHighlights(!showHighlights)}
      className="w-full flex justify-between items-center cursor-pointer"
    >
      <span className="text-modalHeaderSize font-semibold">
        Story Highlights
      </span>
      <MdKeyboardArrowDown className={`${showHighlights ? 'rotate-180' : 'rotate-0'}`} />
    </button>
  );
};

export default ShowHighlightsBtn;
