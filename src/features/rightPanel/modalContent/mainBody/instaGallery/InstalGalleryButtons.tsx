import gridIcon from "/assets/frame-grid-icon.svg";
import tagIcon from "/assets/instagram-tag-icon.svg";
const InstalGalleryButtons = () => {
  return (
    <div className="pt-[10px] flex">
      <div className="w-1/2 pb-[8px] cursor-pointer flex justify-center items-center border-b border-b-[#000]">
        <img src={gridIcon} alt="grid icon" className="w-[23px] h-[23px]" />
      </div>
      <div className="w-1/2 pb-[8px] cursor-pointer flex justify-center items-center">
        <img src={tagIcon} alt="tag icon" className="w-[23px] h-[23px]" />
      </div>
    </div>
  );
};

export default InstalGalleryButtons;
