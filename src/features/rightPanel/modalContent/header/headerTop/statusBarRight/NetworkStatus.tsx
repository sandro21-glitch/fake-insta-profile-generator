import { GiNetworkBars } from "react-icons/gi";

const NetworkStatus = () => {
  return (
    <div className="flex items-center gap-[2px] ml-1">
      <GiNetworkBars />
      <GiNetworkBars />
    </div>
  );
};

export default NetworkStatus;
