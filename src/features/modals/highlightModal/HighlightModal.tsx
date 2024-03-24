import ModalContent from "./ModalContent"


const HighlightModal = () => {
  return (
    <div className="fixed left-0 bottom-0 bg-red-900 h-full w-full z-[9999] flex justify-center items-center">
        <ModalContent />
    </div>
  )
}

export default HighlightModal