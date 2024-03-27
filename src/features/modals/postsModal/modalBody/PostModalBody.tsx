import PostTypeList from "./PostTypeList";
import UploadPostImage from "./UploadPostImage";

type PostBodyTypes = {
  postImage: string;
  setPostImage: (img: string) => void;
};
const PostModalBody = ({ postImage,setPostImage }: PostBodyTypes) => {
  return (
    <div className="p-[15px]">
      <UploadPostImage postImage={postImage} setPostImage={setPostImage} />
      <PostTypeList />
    </div>
  );
};

export default PostModalBody;
