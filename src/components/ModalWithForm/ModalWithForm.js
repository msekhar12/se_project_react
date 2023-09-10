import "./ModalWithForm.css";

import Modal from "../Modal/Modal";

export default function ModalWithForm({
  handleCloseModalClick,
  heading,
  name,
  children,
}) {
  return (
    <Modal modalType="modal-with-form" handleClose={handleCloseModalClick}>
      <button
        className="modal-with-form__close"
        type="button"
        onClick={handleCloseModalClick}
      ></button>
      <div className="modal-with-form__content">
        <h3 className="modal-with-form__heading">{heading}</h3>
        <form
          className="modal-with-form__form"
          name={name}
          id={name}
          noValidate
        >
          {children}
          <button type="submit" className="modal-with-form__submit">
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
}
