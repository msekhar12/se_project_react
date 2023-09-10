import "./ItemsContainer.css";
import ItemCard from "../ItemCard/ItemCard";
import ItemModal from "../ItemModal/ItemModal";
import { defaultClothingItems } from "../../utils/constants";
import React, { useState } from "react";

export default function ItemsContainer({ tempClass }) {
  const [clickedItem, setClickedItem] = useState(null);

  /**IMPORTANT: I tried to add onClick() at the <Item> level and it never worked.
   * Looks like we must add onClick event handlers at the basic HTML tags level.
   * Passing the function for onClick as a prop has worked for me.
   */

  return (
    <>
      <div className="items-container">
        {defaultClothingItems.map((item) => {
          //debugger;
          if (tempClass === item.weather) {
            return (
              <ItemCard
                key={item._id}
                imageUrl={item.link}
                name={item.name}
                handleItemClick={() =>
                  setClickedItem({
                    name: item.name,
                    link: item.link,
                    tempClass: item.weather,
                  })
                }
              ></ItemCard>
            );
          }
        })}
      </div>
      {clickedItem && (
        <ItemModal
          clickedItem={clickedItem}
          handleItemClose={() => setClickedItem(null)}
        >
          <img src={clickedItem.link} className="item-modal__image" />
          <div className="item-modal__info-block">
            <h3 className="item-modal__info-block_text">{clickedItem.name}</h3>
            <h3 className="item-modal__info-block_text">{`Weather: ${clickedItem.tempClass}`}</h3>
          </div>
        </ItemModal>
      )}
    </>
  );
}
