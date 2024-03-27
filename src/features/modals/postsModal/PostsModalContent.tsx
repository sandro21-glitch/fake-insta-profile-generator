import { useState } from "react";
import PostModalBody from "./modalBody/PostModalBody";
import PostModalHeader from "./modalHeader/PostModalHeader";
import PostModalFooter from "./modalFooter/PostModalFooter";

const PostsModalContent = () => {
  const [postImage, setPostImage] = useState<string>("");
  const [postType, setPostType] = useState<string>("");
  return (
    <div className="w-[300px] max-w-[300px] bg-white rounded-md overflow-hidden">
      <PostModalHeader />
      <PostModalBody
        postImage={postImage}
        setPostImage={setPostImage}
        setPostType={setPostType}
      />
      <PostModalFooter postImage={postImage} postType={postType} />
    </div>
  );
};

export default PostsModalContent;
