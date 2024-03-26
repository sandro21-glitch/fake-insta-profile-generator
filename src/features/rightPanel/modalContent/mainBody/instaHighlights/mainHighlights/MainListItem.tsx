import { useRef, useState } from "react";
import useOutsideClickAndFocus from "../../../../../../hooks/useOutsideClickAndFocus";
import InputField from "../../../../../../ui/InputField";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { editHighlightName } from "../../../../../slices/highlightsSlice";

type MainListItemTypes = {
  highlight: { id: string; name: string; image: string };
};

const MainListItem = ({ highlight }: MainListItemTypes) => {
  const { image, name, id } = highlight;
  const [editName, setEditName] = useState("");
  const [isInputClicked, setIsInputClicked] = useState(false);
  const dispatch = useAppDispatch();
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useOutsideClickAndFocus({
    containerRef,
    inputRef,
    isInputClicked,
    setIsInputClicked,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newName = e.target.value;
    setEditName(newName);
    dispatch(editHighlightName({ id, editName: newName }));
  };

  return (
    <div
      ref={containerRef}
      className="min-w-[80px] w-[80px] flex flex-col gap-[3px] items-center"
    >
      <div
        className="w-[63px] h-[63px] rounded-full mt-[3px] cursor-pointer
     text-modalHeaderSize flex justify-center items-center overflow-hidden relative
     before:absolute before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2
    before:border before:border-[#dedede] before:rounded-full before:w-[62px] before:h-[62px]
     "
      >
        <img
          src={image}
          alt={name}
          className="w-[56px] h-[56px] rounded-full"
        />
      </div>
      {isInputClicked ? (
        <InputField
          className="w-full text-center text-[12px]"
          value={editName}
          onChange={handleInputChange}
          inputRef={inputRef}
        />
      ) : (
        <p
          onClick={() => setIsInputClicked(true)}
          className="text-[12px] text-startw-full"
        >
          {name}
        </p>
      )}
    </div>
  );
};

export default MainListItem;
