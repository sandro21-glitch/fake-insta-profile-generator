import { BsBatteryCharging } from "react-icons/bs";

const Battery = () => {
  return (
    <div className="bg-white border rounded-md flex items-center justify-between px-2 text-headerSize">
      <input type="text" className="py-2 outline-none" defaultValue={"50"} />
      <div className="flex items-center gap-1 font-bold">
        <span>Battery</span>
        <BsBatteryCharging size={15} />
      </div>
    </div>
  );
};

export default Battery;
