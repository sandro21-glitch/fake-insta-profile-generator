import { RiCheckboxMultipleBlankFill } from "react-icons/ri";
import { FaCircle } from "react-icons/fa";
import { BiSolidMoviePlay } from "react-icons/bi";
import { RxDrawingPinFilled } from "react-icons/rx";
type PostTypeTypes = {
  postType: string;
};

const PostType = ({ postType }: PostTypeTypes) => {
  return (
    <div className="absolute right-[5px] top-[5px] text-white">
      {postType === "single" ? (
        <FaCircle color="white" size={15} />
      ) : postType === "multiple" ? (
        <RiCheckboxMultipleBlankFill color="white" className="rotate-90" size={20} />
      ) : postType === "reel" ? (
        <BiSolidMoviePlay color="white" size={20} />
      ) : postType === "pin" ? (
        <RxDrawingPinFilled color="white" size={20} />
      ) : (
        ""
      )}
    </div>
  );
};

export default PostType;
