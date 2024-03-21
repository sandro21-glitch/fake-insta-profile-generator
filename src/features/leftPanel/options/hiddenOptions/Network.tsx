const Network = () => {
  return (
    <div className="mb-3">
      <p className="text-headerSize font-bold mb-1">Network</p>
      <select className="w-full border outline-none p-1 text-headerSize">
        <option>5G</option>
        <option>4G</option>
        <option>3G</option>
        <option>2G</option>
        <option>Wifi</option>
      </select>
    </div>
  );
};

export default Network;
