import "./ItemModal.css";
import React from "react";

export default function ItemModal(props) {
  /* Do NOT handle visibility as a state here. Handle it from outside.
    If we try to handle it here it won't work*/
  // const [visibility, setVisibility] = React.useState(props.visibility);
  //   console.log("in ModalWithForm");
  //   console.log(props.visibility);

  //const [visibility, setVisibility] = React.useState(false);
  let modalRef = React.useRef();

  React.useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        props.handleItemClose();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  React.useEffect(() => {
    const mouseClickHandler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        props.handleItemClose();
      }
    };

    document.addEventListener("mousedown", mouseClickHandler);
    return () => document.removeEventListener("mousedown", mouseClickHandler);
  }, []);

  return (
    <div className="item-modal item-modal_open">
      <div className="item-modal__container" ref={modalRef}>
        <button
          className="item-modal__close"
          type="button"
          onClick={props.handleItemClose}
        ></button>
        {props.children}
      </div>
    </div>
  );
}
