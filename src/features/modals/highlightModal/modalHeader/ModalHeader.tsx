import { IoMdClose } from "react-icons/io";
const ModalHeader = () => {
  return (
    <header className="flex justify-between w-full min-h-[16.43px] p-[15px] border border-b-[#e5e5e5]">
      <p>Add Highlight</p>
      <button>
        <IoMdClose />
      </button>
    </header>
  );
};

export default ModalHeader;
