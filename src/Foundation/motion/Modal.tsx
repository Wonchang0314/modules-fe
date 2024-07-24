import React, { useState } from "react";

export interface ModalProps {
  animationEnter: string;
  animationExit: string;
  text: string;
}

const Modal: React.FC<ModalProps> = ({
  animationEnter,
  animationExit,
  text,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleOpen = () => {
    setIsVisible(true);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <button
        onClick={handleOpen}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Open
      </button>

      {isVisible && (
        <div
          className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-900 bg-opacity-50 ${
            isVisible ? animationEnter : animationExit
          }`}
        >
          <div className="bg-white p-8 rounded shadow-lg">
            <p>{text}</p>
            <button
              onClick={handleClose}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
