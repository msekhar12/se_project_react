import "./Item.css";
export default function Item({ handleItemClick, name, imageUrl }) {
  return (
    <div className="item" onClick={handleItemClick}>
      <div className="item__name-container">
        <p className="item__name">{name}</p>
      </div>

      <img src={imageUrl} className="item__image" />
    </div>
  );
}
