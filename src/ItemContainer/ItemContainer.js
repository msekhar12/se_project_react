import "./ItemContainer.css";
import Item from "../Item/Item";

export default function ItemContainer() {
  const url =
    "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/wtwr-project/Cap.png?etag=f3dad389b22909cafa73cff9f9a3d591";

  return (
    <div className="item-container">
      <Item imageUrl={url}></Item>
      <Item imageUrl={url}></Item>
      <Item imageUrl={url}></Item>
      <Item imageUrl={url}></Item>
      <Item imageUrl={url}></Item>
    </div>
  );
}
