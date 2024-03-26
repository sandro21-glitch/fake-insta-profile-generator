import AddPostsBtn from "./AddPostsBtn";
import UserPosts from "./posts/UserPosts";

const TabContent = () => {
  return (
    <section className="h-[440px]">
      <AddPostsBtn />
      <UserPosts />
    </section>
  );
};

export default TabContent;
