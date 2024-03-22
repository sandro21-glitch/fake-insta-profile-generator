import BatteryStatus from "./BatteryStatus";
import NetworkData from "./NetworkData";
import NetworkStatus from "./NetworkStatus";

const StatusBarRight = () => {
  return (
    <li className="flex items-center">
      <NetworkData />
      <NetworkStatus />
      <BatteryStatus />
    </li>
  );
};

export default StatusBarRight;
