const PostTypeList = () => {
  return (
    <ul className="grid grid-cols-2 gap-3">
      <li>
        <label
          htmlFor="single"
          className="normal-case flex items-center gap-2 cursor-pointer"
        >
          <input id="single" type="radio" />
          Single post
        </label>
      </li>
      <li>
        <label
          htmlFor="multiple"
          className="normal-case flex items-center gap-2 cursor-pointer"
        >
          <input id="multiple" type="radio" />
          Multiple Post
        </label>
      </li>
      <li>
        <label
          htmlFor="reel"
          className="normal-case flex items-center gap-2 cursor-pointer"
        >
          <input id="reel" type="radio" />
          Reel
        </label>
      </li>
      <li>
        <label
          htmlFor="pin"
          className="normal-case flex items-center gap-2 cursor-pointer"
        >
          <input id="pin" type="radio" />
          Pin
        </label>
      </li>
    </ul>
  );
};

export default PostTypeList;
