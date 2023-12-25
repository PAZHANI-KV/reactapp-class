import React from "react";
import ItemsList from "./ItemsList";

//The following code is an example which demonstrate the concept of "list and keys" of React.js

const Contents = ({items, setItems, handleCheckkk, handleDelete}) => {
 

  // A small example for mapping and filter is given below
  // const numbers = [-2, -1, 0, 1, 2]
  // const itemss = numbers.map(n => ({number:n}))
  // console.log(itemss);
  // const cake = numbers.filter(n => n>=0);
  // console.log(cake);
  // const chocolate = numbers.filter(n => n>=0).map(n => ({number: n}))
  // console.log(chocolate);

  return (
    <main>

{items.length ? (
<ItemsList
items = {items}
handleCheckkk = {handleCheckkk}
handleDelete = {handleDelete}/>
) : (
  <p style={{marginTop:'2rem'}}>Your List is empty!</p>
)
}
    </main>
  );
};

export default Contents;
