import { FaCloudUploadAlt } from "react-icons/fa";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { openPostsModal } from "../../../../../slices/postsSlice";
const NoPosts = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="flex justify-center items-center h-full flex-col">
      <p className="font-bold text-modalHeaderSize">
        Capture the moment with a friend
      </p>
      <button
        onClick={() => dispatch(openPostsModal())}
        className="text-headerSize text-[#008ff1] flex items-center"
      >
        Create your first post <FaCloudUploadAlt className="ml-1" />
      </button>
    </div>
  );
};

export default NoPosts;
