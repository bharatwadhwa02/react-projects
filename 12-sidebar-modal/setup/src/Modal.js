import React from "react";
import { FaTimes } from "react-icons/fa";
import { useGlobalContext } from "./context";
const Modal = () => {
  const { isModalOpen, hideModal } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? `modal-overlay show-modal` : `modal-overlay`
      }`}
    >
      <div className="modal-container">
        <h3>modal container</h3>
        <button onClick={hideModal} className="close-modal-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
};

export default Modal;
