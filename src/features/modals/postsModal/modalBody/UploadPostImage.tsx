import { ChangeEvent } from "react";

type PostImageTypes = {
  postImage: string;
  setPostImage: (img: string) => void;
};
const UploadPostImage = ({ postImage, setPostImage }: PostImageTypes) => {
  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      const imageDataUrl = reader.result as string;
      setPostImage(imageDataUrl);
    };

    reader.readAsDataURL(file);
  };

  return (
    <label
      htmlFor="image"
      className="block cursor-pointer w-full max-w-[300px] max-h-[300px] mb-[30px] border-2 border-dashed border-gray-500 rounded-lg"
    >
      <input
        onChange={handleImageChange}
        type="file"
        id="image"
        className="hidden"
      />
      <img
        src={`${
          postImage === ""
            ? "https://fakedetail.com/assets/images/addimgbg.jpg"
            : postImage
        }`}
        alt="image"
        className="w-full h-auto"
      />
    </label>
  );
};

export default UploadPostImage;
