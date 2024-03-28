import Options from "../features/leftPanel/Options";

const LeftPanel = () => {
  return (
    <article className="w-full lg:w-1/3 border p-3 select-none max-h-[720px] md:overflow-y-scroll overflow-x-hidden">
      <Options />
    </article>
  );
};

export default LeftPanel;
