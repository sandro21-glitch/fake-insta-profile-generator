import FullName from "./FullName";
import ProfileBio from "./ProfileBio";
import ProfileLinks from "./ProfileLinks";

const ProfileAbout = () => {
  return (
    <div className="pt-[8px] pb-[12px]">
      <FullName />
      <ProfileBio />
      <ProfileLinks />
    </div>
  );
};

export default ProfileAbout;
