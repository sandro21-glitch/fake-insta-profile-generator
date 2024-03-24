import reelsIcon from "/assets/instagram-reels-icon.svg";
import instaSearch from "/assets/insta-search.svg";
import addStory from "/assets/add-story.svg";
import iconHome from "/assets/icons-home.svg";
const FooterList = () => {
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
      <li className="cursor-pointer">
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
            <img src="https://fakedetail.com/assets/images/insta-profile-pic.jpg" alt="user image" />
        </div>
      </li>
    </>
  );
};

export default FooterList;
