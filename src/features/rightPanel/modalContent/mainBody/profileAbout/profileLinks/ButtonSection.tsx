interface ButtonSectionProps {
  isBtnClicked: boolean;
  isOtherClicked: boolean;
  handleClickFb: () => void;
  handleClickOther: () => void;
}

const ButtonSection: React.FC<ButtonSectionProps> = ({
  isBtnClicked,
  isOtherClicked,
  handleClickFb,
  handleClickOther,
}) => {
  return (
    <div className="flex gap-2">
      {!isBtnClicked && (
        <button
          type="button"
          className="bg-primaryColor text-headerSize text-white p-[7px] rounded-md"
          onClick={handleClickFb}
        >
          Facebook Profile
        </button>
      )}
      {!isOtherClicked && (
        <button
          type="button"
          className="bg-primaryColor text-headerSize text-white p-[7px] rounded-md"
          onClick={handleClickOther}
        >
          Other
        </button>
      )}
    </div>
  );
};

export default ButtonSection;
