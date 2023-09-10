import "./FormModal.css";

import Modal from "../Modal/Modal";

export default function FormModal({
  handleCloseModalClick,
  heading,
  name,
  children,
}) {
  return (
    <Modal modalType="form-modal" handleClose={handleCloseModalClick}>
      <button
        className="form-modal__close"
        type="button"
        onClick={handleCloseModalClick}
      ></button>
      <div className="form-modal__content">
        <h3 className="form-modal__heading">{heading}</h3>
        <form className="form-modal__form" name={name} id={name} noValidate>
          {children}
          <button type="submit" className="form-modal__submit">
            Save
          </button>
        </form>
      </div>
    </Modal>
  );
}
