import Followers from "./profileCountList/Followers";
import Following from "./profileCountList/Following";
import Posts from "./profileCountList/Posts";

const ProfileCount = () => {
  return (
    <li className="flex justify-center items-center w-full text-modalHeaderSize font-normal">
      <Posts />
      <Followers />
      <Following />
    </li>
  );
};

export default ProfileCount;
