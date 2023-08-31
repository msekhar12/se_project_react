import "./Item.css";
export default function Item(props) {
  return (
    <div className="item">
      <div className="item__name-container">
        <p className="item__name">T-shirt</p>
      </div>

      <img src={props.imageUrl} className="item__image" />
    </div>
  );
}
