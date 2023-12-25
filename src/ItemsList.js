import React from "react";
import LineItems from "./LineItems";


const ItemsList = ({items, handleCheckkk, handleDelete}) => {
  return (
    <ul>
      {items.map((item) => (
       <LineItems
       item = {item}
       key = {item.id}
handleCheckkk = {handleCheckkk}
handleDelete = {handleDelete}/>
      ))}
    </ul>
  );
};

export default ItemsList;