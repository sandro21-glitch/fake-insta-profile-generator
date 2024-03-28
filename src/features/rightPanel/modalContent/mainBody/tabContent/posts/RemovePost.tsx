import { MdDelete } from "react-icons/md";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { removePost } from "../../../../../slices/postsSlice";

type RemovePostTypes = {
  id: string;
};

const RemovePost = ({ id }: RemovePostTypes) => {
  const dispatch = useAppDispatch();

  const handleRemovePost = (id: string) => {
    dispatch(removePost(id));
  };

  return (
    <button
      onClick={() => handleRemovePost(id)}
      className="absolute left-[5px] top-[5px] hidden group-hover:block"
    >
      <div className="w-[20px] h-[20px] bg-white rounded-full flex items-center justify-center">
        <MdDelete className="text-red-900" />
      </div>
    </button>
  );
};

export default RemovePost;
