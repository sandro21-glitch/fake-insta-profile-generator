import ModalContent from "./ModalContent"


const HighlightModal = () => {
  return (
    <div className="absolute inset-0 h-full w-full z-[9999] flex justify-center items-center ">
      <div className="absolute inset-0 bg-black opacity-65 z-[-1]"></div>
        <ModalContent />
    </div>
  )
}

export default HighlightModal