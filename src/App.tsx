import LeftPanel from "./pages/LeftPanel";
import RightPanel from "./pages/RightPanel";
import Navbar from "./ui/Navbar";

function App() {
  return (
    <main className="section-center">
      <Navbar />
      <section className="flex gap-5 items-start flex-col lg:flex-row">
        <LeftPanel />
        <RightPanel />
      </section>
    </main>
  );
}

export default App;
