import { FaCloudUploadAlt } from "react-icons/fa";

const AddPostsBtn = () => {
  return (
    <button className="text-headerSize w-full h-auto bg-primaryColor mt-[1px]
     text-white flex justify-center py-2 rounded-[3px]">
      <span className="capitalize">add post</span>
      <FaCloudUploadAlt />
    </button>
  );
};

export default AddPostsBtn;
