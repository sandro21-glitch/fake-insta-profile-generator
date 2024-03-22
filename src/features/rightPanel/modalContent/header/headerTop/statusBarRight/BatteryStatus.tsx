const BatteryStatus = () => {
  return (
    <div className="flex items-center ml-1">
      <div>50%</div>
      <div
        className="w-[20px] h-[11px] ml-1 rounded-[3px] border border-[#000] relative
        before:absolute before:left-full before:ml-[2px] before:w-[2.5px] before:h-[5px] before:top-1/2 before:-translate-y-1/2 before:bg-[#000] m-0
      "
      >
        <div
          style={{ width: "50%" }}
          className="bg-[#000] absolute left-0 top-0 bottom-0 right-0"
        ></div>
      </div>
    </div>
  );
};

export default BatteryStatus;
