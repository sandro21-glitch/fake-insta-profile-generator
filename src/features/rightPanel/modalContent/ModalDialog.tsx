import Footer from "./footer/Footer";
import Header from "./header/Header";
import MainBody from "./mainBody/MainBody";

const ModalDialog = () => {
  return (
    <div className="bg-white w-full relative">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
};

export default ModalDialog;
