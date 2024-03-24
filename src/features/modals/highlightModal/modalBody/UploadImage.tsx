const UploadImage = () => {
  return (
    <label
      htmlFor="image"
      className="block w-full max-w-[300px] max-h-[300px] mb-[30px] border-2 border-dashed border-gray-500 rounded-lg"
    >
      <input type="file" id="image" className="hidden" />
      <img
        src="https://fakedetail.com/assets/images/addimgbg.jpg"
        alt="image"
        className="w-full h-auto"
      />
    </label>
  );
};

export default UploadImage;
