import { IoMdClose } from "react-icons/io";
import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { setHighlightsModalClose } from "../../../slices/highlightsSlice";
const ModalHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="flex justify-between w-full min-h-[16.43px] p-[15px] border border-b-[#e5e5e5]">
      <p className="text-modalHeaderSize">Add Highlight</p>
      <button type="button" onClick={() => dispatch(setHighlightsModalClose())}>
        <IoMdClose />
      </button>
    </header>
  );
};

export default ModalHeader;
