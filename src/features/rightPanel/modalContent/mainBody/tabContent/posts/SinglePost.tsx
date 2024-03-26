type SinglePostTypes = {
  post: {
    id: string;
    img: string;
  };
};

const SinglePost = ({ post }: SinglePostTypes) => {
  const { id, img } = post;
  return (
    <li className="w-[120px] h-[120px] bg-cover bg-center bg-no-repeat p-[1px]">
      <img src={img} alt={id} className="w-full h-full object-cover" />
    </li>
  );
};

export default SinglePost;
