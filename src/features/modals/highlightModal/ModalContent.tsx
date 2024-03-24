import ModalBody from "./modalBody/ModalBody";
import ModalHeader from "./modalHeader/ModalHeader";

const ModalContent = () => {
  return (
    <div className="w-[300px] max-w-[300px] bg-white rounded-md">
      <ModalHeader />
      <ModalBody />
    </div>
  );
};

export default ModalContent;
