import PostType from "./PostType";
import RemovePost from "./RemovePost";

type SinglePostTypes = {
  post: {
    id: string;
    img: string;
    postType: string;
  };
};

const SinglePost = ({ post }: SinglePostTypes) => {
  const { id, img, postType } = post;
  return (
    <li className="w-[120px] h-[120px] bg-cover bg-center bg-no-repeat p-[1px] relative">
      <img src={img} alt={id} className="w-full h-full object-cover" />
      <PostType postType={postType} />
      <RemovePost />
    </li>
  );
};

export default SinglePost;
