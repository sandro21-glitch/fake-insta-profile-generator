import { HiOutlinePlus } from "react-icons/hi";
const AddNewHighlight = () => {
  return (
    <li className="min-w-[80px] w-[80px] flex flex-col gap-[3px] items-center">
      <div
        className="w-[63px] h-[63px] border border-[#000] rounded-full mt-[3px] cursor-pointer
       text-modalHeaderSize flex justify-center items-center"
      >
        <HiOutlinePlus size={23} />
      </div>
      <p className="text-modalHeaderSize">New</p>
    </li>
  );
};

export default AddNewHighlight;