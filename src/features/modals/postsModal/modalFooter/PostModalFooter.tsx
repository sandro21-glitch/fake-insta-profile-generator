import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { addNewPost, closePostsModal } from "../../../slices/postsSlice";

type ModalFooterTypes = {
  postImage: string;
  postType: string;
};

const PostModalFooter = ({ postImage, postType }: ModalFooterTypes) => {
  const dispatch = useAppDispatch();

  const handleAddPost = () => {
    if (postImage === "" || postType === "") {
      alert("Please provide both an image and a post type.");
      return;
    }
    dispatch(addNewPost({ postImage, postType }));
    dispatch(closePostsModal());
  };

  return (
    <div className="border border-t-[#e5e5e5] p-[15px] flex justify-end">
      <button
        type="button"
        onClick={handleAddPost}
        className="h-[38px] w-auto bg-primaryColor text-white py-[6px] px-[12px] rounded-md text-modalHeaderSize"
      >
        Post
      </button>
    </div>
  );
};

export default PostModalFooter;
