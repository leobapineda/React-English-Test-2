import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGetContext } from "./context";
const Modal = () => {
  const { modalState, CloseModal } = useGetContext();
  console.log("Modal");
  return (
    <div className={`modal-overlay ${modalState ? "show-modal" : null}`}>
      <div className="modal-container">
        <h3>modal content</h3>
        <button onClick={CloseModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
