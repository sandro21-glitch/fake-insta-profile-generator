import PreviewPart from "../features/rightPanel/PreviewPart";

const RightPanel = () => {
  const backgroundImageUrl = `url(${"https://fakedetail.com/assets/images/pattern.png"})`;

  return (
    <article
      style={{ background: backgroundImageUrl }}
      className="w-full h-full bg-cover bg-center"
    >
      <PreviewPart />
    </article>
  );
};

export default RightPanel;
