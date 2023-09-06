import "./ItemContainer.css";
import Item from "../Item/Item";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../utils/constants";
import React from "react";

export default function ItemContainer(props) {
  const [clickedItem, setClickedItem] = React.useState({
    state: false,
  });

  /**IMPORTANT: I tried to add onClick() at the <Item> level and it never worked.
   * Looks like we must add onClick event handlers at the basic HTML tags level.
   * Passing the function for onClick as a prop has worked for me.
   */

  return (
    <>
      <div className="item-container">
        {defaultClothingItems.map((item) => {
          //debugger;
          if (props.tempClass === item.weather) {
            return (
              <Item
                key={item._id}
                imageUrl={item.link}
                name={item.name}
                handleItemClick={() =>
                  setClickedItem({
                    ...clickedItem,
                    name: item.name,
                    link: item.link,
                    tempClass: item.weather,
                    state: true,
                  })
                }
              ></Item>
            );
          }
        })}
      </div>
      {clickedItem.state && (
        <ItemModal
          clickedItem={clickedItem}
          handleItemClose={() =>
            setClickedItem({
              ...clickedItem,
              state: false,
            })
          }
        >
          <img src={clickedItem.link} />
          <div className="item-modal__info-block">
            <h3 className="item-modal__info-block_text">{clickedItem.name}</h3>
            <h3 className="item-modal__info-block_text">{`Weather: ${clickedItem.tempClass}`}</h3>
          </div>
        </ItemModal>
      )}
    </>
  );
}
