import { ChangeEvent } from "react";

interface UploadImageProps {
  setHighlightImage: React.Dispatch<React.SetStateAction<string>>;
  highlightImage: string;
}
const UploadImage = ({
  setHighlightImage,
  highlightImage,
}: UploadImageProps) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result as string;
      setHighlightImage(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };

  return (
    <label
      htmlFor="image"
      className="block cursor-pointer w-full max-w-[300px] max-h-[300px] mb-[30px] border-2 border-dashed border-gray-500 rounded-lg"
    >
      <input
        type="file"
        id="image"
        className="hidden"
        onChange={handleImageChange}
      />
      <img
        src={`${
          highlightImage === ""
            ? "https://fakedetail.com/assets/images/addimgbg.jpg"
            : highlightImage
        }`}
        alt="image"
        className="w-full h-auto"
      />
    </label>
  );
};

export default UploadImage;
