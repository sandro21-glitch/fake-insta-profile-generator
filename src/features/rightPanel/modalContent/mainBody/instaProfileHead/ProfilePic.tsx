import { MdModeEdit } from "react-icons/md";
const ProfilePic = () => {
  return (
    <li className="cursor-pointer mr-[6px]">
      <label htmlFor="profile" className="block relative w-[86px] h-[86px]">
        <img
          src="https://fakedetail.com/assets/images/insta-profile-pic.jpg"
          alt="profile picture"
          className="w-[86px] h-[86px] rounded-[50%] cursor-pointer"
        />
        <input type="file" name="profile" id="profile" className="hidden" />
        <div
          className="absolute left-1/2 top-1/2 z-[10]
           -translate-x-1/2 -translate-y-1/2 bg-[#00000080] w-[1.8rem] h-[1.8rem]
            flex items-center justify-center rounded-full cursor-pointer"
        >
          <MdModeEdit className="text-white" />
        </div>
      </label>
    </li>
  );
};

export default ProfilePic;
