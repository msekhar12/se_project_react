<ModalWithForm
  name="new-garment"
  heading="New Garment"
  id="new-garment"
  visibility={addGarments}
  handleCloseModalClick={() => setAddGarments(false)}
>
  <label class="modal-with-form__label">
    Name
    <input
      type="text"
      class="modal-with-form__input"
      placeholder="Name"
      required
      minlength="2"
      maxlength="40"
      id="new-garment-name"
      name="new-garment-name"
    />
    <span class="modal-with-form__line"></span>
    <span
      class="modal-with-form__input-error"
      id="new-garment-name-error"
    ></span>
  </label>
  <label class="modal-with-form__label">
    Image
    <input
      type="url"
      class="modal-with-form__input"
      placeholder="Image URL"
      required
      minlength="2"
      maxlength="40"
      id="new-garment-url"
      name="new-garment-url"
    />
    <span class="modal-with-form__line"></span>
    <span
      class="modal-with-form__input-error"
      id="new-garment-url-error"
    ></span>
  </label>
</ModalWithForm>;
