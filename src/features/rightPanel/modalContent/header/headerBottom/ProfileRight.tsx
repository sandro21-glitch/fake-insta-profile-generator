import { GrAdd } from "react-icons/gr";
import { AiOutlineMenu } from "react-icons/ai";
const ProfileRight = () => {
  return (
    <li className="flex items-center">
      <div className="border-[1.5px] border-black rounded-[6px] p-[.20rem] mr-4">
        <GrAdd size={13} />
      </div>
      <AiOutlineMenu size={23} />
    </li>
  );
};

export default ProfileRight;
