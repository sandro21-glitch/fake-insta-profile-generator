import { FaCloudUploadAlt } from "react-icons/fa";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { openPostsModal } from "../../../../slices/postsSlice";

const AddPostsBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(openPostsModal())}
      className="text-headerSize w-full h-auto bg-primaryColor mt-[1px]
     text-white flex items-center justify-center py-2 rounded-[3px]"
    >
      <span className="capitalize">add post</span>
      <FaCloudUploadAlt className="ml-1" />
    </button>
  );
};

export default AddPostsBtn;
