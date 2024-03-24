import HighlightNameInput from "./HighlightNameInput";
import SubmitBtn from "./SubmitBtn";
import UploadImage from "./UploadImage";

const ModalBody = () => {
  return (
    <div className="p-[15px]">
      <UploadImage />
      <HighlightNameInput />
      <SubmitBtn />
    </div>
  );
};

export default ModalBody;
