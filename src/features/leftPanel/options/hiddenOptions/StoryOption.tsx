import { useState } from "react";

const StoryOption = () => {
  const [storyStatus, setStoryStatus] = useState("unseen");

  return (
    <div className="mb-3 flex items-center text-headerSize">
      <label htmlFor="seen" className="w-1/2">
        <input
          type="radio"
          id="seen"
          checked={storyStatus === "seen"}
          onChange={() => setStoryStatus('seen')}
          className="mr-2"
        />
        seen
      </label>
      <label htmlFor="unseen" className="w-1/2">
        <input
          type="radio"
          id="unseen"
          checked={storyStatus === "unseen"}
          onChange={() => setStoryStatus('unseen')}
          className="mr-2"
        />
        unseen
      </label>
    </div>
  );
};

export default StoryOption;
