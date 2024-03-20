import { IoTimeOutline } from "react-icons/io5";

const Time = () => {
  return (
    <div className="bg-white border rounded-md flex items-center justify-between px-2 text-headerSize mb-2">
      <input type="text" className="py-2 outline-none" defaultValue={'10:04 AM'} />
      <IoTimeOutline size={15} />
    </div>
  );
};

export default Time;
