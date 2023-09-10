import "./ItemCard.css";
export default function Item({ handleItemClick, name, imageUrl }) {
  return (
    <div className="item-card" onClick={handleItemClick}>
      <div className="item-card__name-container">
        <p className="item-card__name">{name}</p>
      </div>

      <img src={imageUrl} className="item-card__image" />
    </div>
  );
}
