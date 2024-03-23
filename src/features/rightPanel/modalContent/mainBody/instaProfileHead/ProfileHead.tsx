import ProfileCount from "./ProfileCount";
import ProfilePic from "./ProfilePic";

const ProfileHead = () => {
  return (
    <ul className="flex items-center ">
      <ProfilePic />
      <ProfileCount />
    </ul>
  );
};

export default ProfileHead;
