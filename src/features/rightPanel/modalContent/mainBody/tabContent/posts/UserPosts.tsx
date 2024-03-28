import { useAppSelector } from "../../../../../../hooks/reduxHooks";
import NoPosts from "./NoPosts";
import SinglePost from "./SinglePost";

const UserPosts = () => {
  const { posts } = useAppSelector((store) => store.posts);
  if (posts.length < 1) return <NoPosts />;
  return (
    <div className="h-full">
      <ul className="flex flex-wrap ">
      {posts.map((post) => {
        return <SinglePost key={post.id} post={post} />;
      })}
    </ul>
    </div>
  );
};

export default UserPosts;
