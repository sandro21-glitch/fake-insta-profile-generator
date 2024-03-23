import InstaUsername from "./InstaUsername";
import ProfileRight from "./ProfileRight";

const HeaderBottom = () => {
  return (
    <ul className="flex justify-between items-center px-4 py-2">
      <InstaUsername />
      <ProfileRight />
    </ul>
  );
};

export default HeaderBottom;
