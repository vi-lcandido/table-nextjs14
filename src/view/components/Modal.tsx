import { ReactNode } from 'react';
import './modalStyles.css';

interface ModalProps {
  isOpen: boolean;
  handleClose: () => void;
  children: ReactNode;
}

export function Modal({ isOpen, handleClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center backdrop">
        <div className=" relative bg-slate-100 p-8 rounded-lg w-full max-w-xl overflow-y-auto">
          <div className="flex justify-between ">
            <div className=" w-full mb-4 py-6 text-center border-b-amber-700">
              <h1> Edição dos dados</h1>
            </div>
            <button
              className="absolute border-none bg-transparent m-4 text-gray-500 hover:text-red-600 transition-all font-semibold"
              type="button"
              onClick={handleClose}
            >
              X
            </button>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </>
  );
}
