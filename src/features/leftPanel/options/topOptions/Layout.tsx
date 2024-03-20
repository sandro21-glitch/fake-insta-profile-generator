import { useState } from "react";

const Layout = () => {
  const [layout, setLayout] = useState("android");

  return (
    <div className="flex items-center mb-2">
      <p className="font-bold text-headerSize mr-3">Layout:</p>
      <div className="flex gap-2">
        <label
          htmlFor="android"
          className="text-headerSize flex items-center gap-[.2rem] cursor-pointer"
        >
          <input
            onChange={() => setLayout("android")}
            type="radio"
            checked={layout === "android"}
            name="android"
            id="android"
          />
          Android
        </label>
        <label
          htmlFor="iphone"
          className="text-headerSize flex items-center gap-[.2rem] cursor-pointer"
        >
          <input
            onChange={() => setLayout("iphone")}
            type="radio"
            checked={layout === "iphone"}
            name="iphone"
            id="iphone"
          />
          Iphone
        </label>
      </div>
    </div>
  );
};

export default Layout;
