import { useEffect } from "react";
import ModalContent from "./ModalContent"


const HighlightModal = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  return (
    <div className="fixed inset-0 h-screen w-full z-[9999] flex justify-center items-center ">
      <div className="fixed inset-0 bg-black opacity-65 z-[-1]"></div>
        <ModalContent />
    </div>
  )
}

export default HighlightModal