import InstaModal from "./InstaModal";
import LiveBoxModal from "./modals/LiveBoxModal";

const PreviewPart = () => {
  return (
    <section className="border min-h-[512px] relative rounded-md p-5">
      <LiveBoxModal />
      <InstaModal />
    </section>
  );
};

export default PreviewPart;
