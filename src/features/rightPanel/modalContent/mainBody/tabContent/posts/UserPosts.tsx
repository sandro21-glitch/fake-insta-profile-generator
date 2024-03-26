import SinglePost from "./SinglePost";

const posts = [
  {
    id: "1",
    img: "https://media.istockphoto.com/id/886636648/photo/young-man-is-taking-pictures-with-an-old-camera.jpg?s=612x612&w=0&k=20&c=xhNzBup3llLNBJjj4wU6kO8gmK8xiXIbxKX6cpveUhI=",
  },
  {
    id: "2",
    img: "data:image/jpeg;base64,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",
  },
  {
    id: "3",
    img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
  {
    id: "34",
    img: "https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg",
  },
];

const UserPosts = () => {
  return (
    <ul className="flex flex-wrap">
      {posts.map((post) => {
        return <SinglePost key={post.id} post={post} />;
      })}
    </ul>
  );
};

export default UserPosts;