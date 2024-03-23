import StatusBarLeft from "./statusBarLeft/StatusBarLeft";
import StatusBarRight from "./statusBarRight/StatusBarRight";

const HeaderTop = () => {
  return (
    <ul className="flex items-center justify-between px-5 py-2">
      <StatusBarLeft />
      <StatusBarRight />
    </ul>
  );
};

export default HeaderTop;
