import HighlightNameInput from "./HighlightNameInput";
import UploadImage from "./UploadImage";

const ModalBody = () => {
  return (
    <div className="p-[15px]">
      <UploadImage />
      <HighlightNameInput />
    </div>
  );
};

export default ModalBody;
