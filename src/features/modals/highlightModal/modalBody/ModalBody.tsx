import { useState } from "react";
import HighlightNameInput from "./HighlightNameInput";
import SubmitBtn from "./SubmitBtn";
import UploadImage from "./UploadImage";

const ModalBody = () => {
  const [highlightName, setHighlightName] = useState("");
  const [highlightImage, setHighlightImage] = useState("");

  return (
    <div className="p-[15px]">
      <UploadImage
        setHighlightImage={setHighlightImage}
        highlightImage={highlightImage}
      />
      <HighlightNameInput
        setHighlightName={setHighlightName}
        highlightName={highlightName}
      />
      <SubmitBtn
        highlightName={highlightName}
        highlightImage={highlightImage}
      />
    </div>
  );
};

export default ModalBody;
