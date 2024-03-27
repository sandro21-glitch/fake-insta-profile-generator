import reelsIcon from "/assets/instagram-reels-icon.svg";
import instaSearch from "/assets/insta-search.svg";
import addStory from "/assets/add-story.svg";
import iconHome from "/assets/icons-home.svg";
import { useAppDispatch } from "../../../../../hooks/reduxHooks";
import { openPostsModal } from "../../../../slices/postsSlice";
const FooterList = () => {
  const dispatch = useAppDispatch();
  return (
    <>
      <li>
        <img src={iconHome} alt="home icon" className="w-[30px] h-[24px]" />
      </li>
      <li>
        <img
          src={instaSearch}
          alt="search icon"
          className="w-[30px] h-[24px]"
        />
      </li>
      <li className="cursor-pointer" onClick={() => dispatch(openPostsModal())}>
        <img
          src={addStory}
          alt="add story icon"
          className="w-[30px] h-[24px]"
        />
      </li>
      <li>
        <img src={reelsIcon} alt="reels icon" className="w-[30px] h-[24px]" />
      </li>
      <li>
        <div className="border-2 w-[30px] h-[30px] border-black rounded-full">
          <img
            src="https://fakedetail.com/assets/images/insta-profile-pic.jpg"
            alt="user image"
          />
        </div>
      </li>
    </>
  );
};

export default FooterList;
