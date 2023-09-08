import "./Item.css";
export default function Item(props) {
  return (
    <div className="item" onClick={props.handleItemClick}>
      <div className="item__name-container">
        <p className="item__name">{props.name}</p>
      </div>

      <img src={props.imageUrl} className="item__image" />
    </div>
  );
}
