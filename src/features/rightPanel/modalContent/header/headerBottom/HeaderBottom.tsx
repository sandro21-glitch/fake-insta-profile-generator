import InstaUsername from "./InstaUsername";
import ProfileRight from "./ProfileRight";

const HeaderBottom = () => {
  return (
    <ul className="flex justify-between items-center p-2">
      <InstaUsername />
      <ProfileRight />
    </ul>
  );
};

export default HeaderBottom;
