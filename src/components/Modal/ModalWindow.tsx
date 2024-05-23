import Button from "../Buttons/Button";
import IconButton from "../Buttons/IconButton"
import "./ModalWindow.css"

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    text: string;
  }

const ModalWindow = () => {
  return (
    <div className='modal-window'>
      <div className="modal-window-name">
        <p className="modal-window-name-text">FAQ</p>
      </div>
      <div className="modal-window-btn">
        {/* <Button /> */}
      </div>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-xl">dfg</h2>
            <button
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 18L18 6" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <p className="text-center">dfg</p>
          <div className="flex justify-between mt-6">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Left Button
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">
              Right Button
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
