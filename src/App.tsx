import HighlightModal from "./features/modals/highlightModal/HighlightModal";
import PostModal from "./features/modals/postsModal/PostModal";
import { useAppSelector } from "./hooks/reduxHooks";
import LeftPanel from "./pages/LeftPanel";
import RightPanel from "./pages/RightPanel";
import Navbar from "./ui/Navbar";

function App() {
  const { highlightsModal } = useAppSelector((store) => store.highlights);
  const { postsModal } = useAppSelector((store) => store.posts);

  return (
    <main className="section-center">
      <Navbar />
      <section className="flex gap-5 items-start flex-col lg:flex-row">
        <LeftPanel />
        <RightPanel />
      </section>
      {highlightsModal && <HighlightModal />}
      {postsModal && <PostModal />}
    </main>
  );
}

export default App;
