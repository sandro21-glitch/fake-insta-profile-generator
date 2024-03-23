import FullName from "./FullName";
import ProfileBio from "./ProfileBio";
import ProfileLinks from "./ProfileLinks";

const ProfileAbout = () => {
  return (
    <div className="py-[9px]">
      <FullName />
      <ProfileBio />
      <ProfileLinks />
    </div>
  );
};

export default ProfileAbout;
