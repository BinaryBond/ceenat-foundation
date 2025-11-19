"use client";

import Portal from "../portal";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
    children: React.ReactNode;
    modalClassName?: string;
}

export default function Modal({ isOpen, onClose, children, modalClassName }: ModalProps) {
  if (!isOpen) return null;

  return (
    <Portal>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm flex-center z-[9999]"
        onClick={onClose}
      >
        <div
          className={`bg-white p-6 rounded-lg shadow-xl ${modalClassName}`}
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}
