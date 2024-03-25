import InstalGalleryButtons from "./instaGallery/InstalGalleryButtons";
import Highlights from "./instaHighlights/Highlights";
import ProfileHead from "./instaProfileHead/ProfileHead";
import ProfileAbout from "./profileAbout/ProfileAbout";
import ProfileEdit from "./profileEdit/ProfileEdit";
import TabContent from "./tabContent/TabContent";

const MainBody = () => {
  return (
    <section className="w-full h-[507px] overflow-y-scroll overflow-x-hidden">
      <article className="pb-[15px] px-4 py-2">
        <ProfileHead />
        <ProfileAbout />
        <ProfileEdit />
        <Highlights />
      </article>
      <InstalGalleryButtons />
      <TabContent />
    </section>
  );
};

export default MainBody;
