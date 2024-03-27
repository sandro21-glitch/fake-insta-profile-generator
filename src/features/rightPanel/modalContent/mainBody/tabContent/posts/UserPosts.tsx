import { useAppSelector } from "../../../../../../hooks/reduxHooks";
import SinglePost from "./SinglePost";

const UserPosts = () => {
  const { posts } = useAppSelector((store) => store.posts);
  if (posts.length < 1) return <div>No Posts</div>;
  return (
    <ul className="flex flex-wrap">
      {posts.map((post) => {
        return <SinglePost key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default UserPosts;
