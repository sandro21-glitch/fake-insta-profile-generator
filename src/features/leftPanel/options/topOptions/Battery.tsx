import { BsBatteryCharging } from "react-icons/bs";

const Battery = () => {
  return (
    <div className="bg-white max-w-full border rounded-md flex items-center justify-between px-2 text-headerSize mb-3">
      <input type="number" className="py-2 outline-none" defaultValue={50} />
      <BsBatteryCharging size={18} />
    </div>
  );
};

export default Battery;
