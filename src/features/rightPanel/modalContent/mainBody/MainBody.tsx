import ProfileHead from "./instaProfileHead/ProfileHead";
import ProfileAbout from "./profileAbout/ProfileAbout";

const MainBody = () => {
  return (
    <section className="px-4 py-2">
      <ProfileHead />
      <ProfileAbout />
    </section>
  );
};

export default MainBody;
