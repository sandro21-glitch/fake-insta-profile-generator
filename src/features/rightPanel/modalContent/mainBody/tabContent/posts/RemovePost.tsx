import { MdDelete } from "react-icons/md";
const RemovePost = () => {
  return (
    <button className="absolute left-[5px] top-[5px]">
      <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center">
        <MdDelete className="text-red-900" />
      </div>
    </button>
  );
};

export default RemovePost;
