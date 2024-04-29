import { ReactNode } from "react";
import "./modalStyles.css";

 interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
    children: ReactNode
 }

 export function Modal({isOpen, handleClose, children}: ModalProps){
    if(!isOpen) return null;


    return (
      <>
      <div className="fixed inset-0 flex items-center justify-center backdrop">
         <div className=" relative flex flex-col bg-slate-100 p-8 rounded-lg w-full max-w-xl">
            <div className="flex justify-between ">
               <div className=" mb-4 border-b-2 border-b-amber-700 py-6  text-center">
                  <div>
                  <h1> Edição dos dados</h1> 
                  </div>
               </div>
             <button 
             className=""
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
    ) 
    
 }