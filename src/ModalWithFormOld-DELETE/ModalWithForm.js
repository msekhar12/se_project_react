import "./ModalWithForm.css";
import React from "react";

export default function ModalWithForm(props) {
  /* Do nOT handle visibility as a state here. Handle it from outside.
    If we try to handle it here it won't work*/
  // const [visibility, setVisibility] = React.useState(props.visibility);
  //console.log("in ModalWithForm");
  //console.log(props.visibility);

  return (
    <div
      className={
        props.visibility
          ? "modal-with-form modal-with-form_open"
          : "modal-with-form"
      }
    >
      <div className="modal-with-form__container">
        <button
          className="modal-with-form__close"
          type="button"
          onClick={props.handleCloseModalClick}
        ></button>
        <div className="modal-with-form__content">
          <h3 className="modal-with-form__heading">{props.heading}</h3>
          <form
            className="modal-with-form__form"
            name={props.name}
            id={props.name}
            noValidate
          >
            {props.children}
            <button type="submit" className="modal-with-form__submit">
              Save
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
