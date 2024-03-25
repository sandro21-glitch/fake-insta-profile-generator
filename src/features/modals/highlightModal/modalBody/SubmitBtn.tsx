import { useAppDispatch } from "../../../../hooks/reduxHooks";
import {
  addNewHighlight,
  setHighlightsModalClose,
} from "../../../slices/highlightsSlice";

type SubmitBtnTypes = {
  highlightName: string;
  highlightImage: string;
};

const SubmitBtn = ({ highlightName, highlightImage }: SubmitBtnTypes) => {
  const dispatch = useAppDispatch();
  const newItem = {
    name: highlightName,
    image: highlightImage,
  };
  const handleAddNewHighlight = () => {
    if (!highlightName) return;
    dispatch(addNewHighlight(newItem));
    dispatch(setHighlightsModalClose());
  };

  return (
    <div className="flex justify-end w-full text-center">
      <button
        onClick={handleAddNewHighlight}
        className="border-t py-[8px] rounded-md px-[12px] text-modalHeaderSize bg-primaryColor text-white "
      >
        Submit
      </button>
    </div>
  );
};

export default SubmitBtn;
