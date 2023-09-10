import React, { useRef, useEffect } from "react";
import "./Modal.css";

export default function Modal({ handleClose, children, modalType }) {
  /* Do NOT handle visibility as a state here. Handle it from outside.
    If we try to handle it here it won't work*/
  // const [visibility, setVisibility] = React.useState(props.visibility);
  //   console.log("in ModalWithForm");
  //   console.log(props.visibility);

  //const [visibility, setVisibility] = React.useState(false);
  const modalRef = useRef();

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        handleClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    const mouseClickHandler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", mouseClickHandler);
    return () => document.removeEventListener("mousedown", mouseClickHandler);
  }, [modalType]);

  return (
    <div className="modal modal_open">
      <div className={`${modalType}__container`} ref={modalRef}>
        {children}
      </div>
    </div>
  );
}
