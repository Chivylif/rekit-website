import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./styles.module.css";

const Modal = ({
  openModal,
  closeModal,
  children,
  width = "450px",
  modalTop = "0px",
}) => {
  const [mounted, setMounted] = useState();
  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);
  if (mounted)
    return createPortal(
      <div className={`${styles.modal} ${openModal ? "flex" : "hidden"} overflow-auto drop-shadow-md`}>
        <div className={styles.overlay} onClick={closeModal}></div>

        <div  style={{ width: width, zIndex: 200000, overFlowY: 'auto', maxHeight: 'calc(100vh - 110px)'}} className={styles.modal_content + 'mt-20  overflow-auto shadow-lg'}>
          {children}
        </div>
      </div>,
      document.querySelector("#portal")
    );
};

export default Modal;
// max-height: calc(100vh - 210px);
//     overflow-y: auto;