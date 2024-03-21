const BatteryOptions = () => {
  return (
    <div className="mb-3">
      <p className="text-headerSize font-bold mb-1">Battery Options</p>
      <select className="w-full border outline-none p-1 text-headerSize">
        <option>Horizontal</option>
        <option>Vertical-1</option>
        <option>Vertical-2</option>
      </select>
    </div>
  );
};

export default BatteryOptions;
