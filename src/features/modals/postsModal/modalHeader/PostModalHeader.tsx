import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { IoMdClose } from "react-icons/io";
import { closePostsModal } from "../../../slices/postsSlice";
const PostModalHeader = () => {
  const dispatch = useAppDispatch();
  return (
    <header className="min-h-[16.43px] p-[15px] border border-b-[#e5e5e5] flex items-center justify-between">
      <p className="text-modalHeaderSize">Add Post</p>
      <button type="button" onClick={() => dispatch(closePostsModal())}>
        <IoMdClose />
      </button>
    </header>
  );
};

export default PostModalHeader;
