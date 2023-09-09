import "./Modal.css";
import { useRef, useEffect } from "react";

export default function Modal({
  onCloseModal,
  handleCloseModalClick,
  heading,
  name,
  children,
}) {
  /* Do NOT handle visibility as a state here. Handle it from outside.
    If we try to handle it here it won't work*/
  // const [visibility, setVisibility] = React.useState(props.visibility);
  //   console.log("in ModalWithForm");
  //   console.log(props.visibility);

  //const [visibility, setVisibility] = React.useState(false);
  // console.log("In modal");
  // console.log(document.querySelector(".modal"));

  let modalRef = useRef();

  useEffect(() => {
    const close = (e) => {
      if (e.key === "Escape") {
        onCloseModal();
      }
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);

  useEffect(() => {
    const mouseClickHandler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        onCloseModal();
      }
    };

    document.addEventListener("mousedown", mouseClickHandler);
    return () => document.removeEventListener("mousedown", mouseClickHandler);
  }, []);

  return (
    <div className="modal modal_open">
      <div className="modal__container" ref={modalRef}>
        <button
          className="modal__close"
          type="button"
          onClick={handleCloseModalClick}
        ></button>
        <div className="modal__content">
          <h3 className="modal__heading">{heading}</h3>
          <form className="modal__form" name={name} id={name} noValidate>
            {children}
            <button type="submit" className="modal__submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
