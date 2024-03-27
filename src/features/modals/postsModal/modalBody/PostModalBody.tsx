import PostTypeList from "./PostTypeList";
import UploadPostImage from "./UploadPostImage";

type PostBodyTypes = {
  postImage: string;
  setPostImage: (img: string) => void;
  setPostType: (type: string) => void;
};
const PostModalBody = ({
  postImage,
  setPostImage,
  setPostType,
}: PostBodyTypes) => {
  return (
    <div className="p-[15px]">
      <UploadPostImage postImage={postImage} setPostImage={setPostImage} />
      <PostTypeList setPostType={setPostType} />
    </div>
  );
};

export default PostModalBody;
