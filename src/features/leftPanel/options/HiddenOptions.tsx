import BatteryOptions from "./hiddenOptions/BatteryOptions";
import Network from "./hiddenOptions/Network";
import PrivateAccount from "./hiddenOptions/PrivateAccount";
import ProfileIcon from "./hiddenOptions/ProfileIcon";
import ShowFooter from "./hiddenOptions/ShowFooter";
import ShowHeader from "./hiddenOptions/ShowHeader";
import ShowHighlights from "./hiddenOptions/ShowHighlights";
import ShowReels from "./hiddenOptions/ShowReels";
import StoryOption from "./hiddenOptions/StoryOption";
import StoryStatus from "./hiddenOptions/StoryStatus";
import Theme from "./hiddenOptions/Theme";
import VerifiedBadge from "./hiddenOptions/VerifiedBadge";

const HiddenOptions = () => {
  return (
    <article>
      <BatteryOptions />
      <Network />
      <Theme />
      <ShowHeader />
      <ShowFooter />
      <PrivateAccount />
      <VerifiedBadge />
      <StoryStatus />
      <StoryOption />
      <ShowHighlights />
      <ShowReels />
      <ProfileIcon />
    </article>
  );
};

export default HiddenOptions;
