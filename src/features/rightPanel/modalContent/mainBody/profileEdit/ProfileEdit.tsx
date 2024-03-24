import EditProfileBtn from "./EditProfileBtn";
import PlusUserBtn from "./PlusUserBtn";
import ShareProfileBtn from "./ShareProfileBtn";

const ProfileEdit = () => {
  return (
    <div className="mb-[16px] flex items-center gap-2">
      <EditProfileBtn />
      <ShareProfileBtn />
      <PlusUserBtn />
    </div>
  );
};

export default ProfileEdit;
