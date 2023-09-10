import "./ItemModal.css";

import Modal from "../Modal/Modal";

export default function ItemModal({ handleItemClose, children }) {
  return (
    <Modal modalType="item-modal" handleClose={handleItemClose}>
      <button
        className="item-modal__close"
        type="button"
        onClick={handleItemClose}
      ></button>
      {children}
    </Modal>
  );
}
