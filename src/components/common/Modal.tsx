import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-lg w-full p-6 shadow-lg">
        <div className="flex justify-between items-center border-b pb-2 mb-4">
          <h2 className="text-xl font-semibold text-purple-700">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-purple-600 text-xl font-bold"
          >
            &times;
          </button>
        </div>
        <div className="text-gray-700 space-y-3 max-h-60 overflow-y-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
