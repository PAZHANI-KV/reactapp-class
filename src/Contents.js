import React, { useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";


const Contents = () => {

const [items, setItems] = useState(
    [
        {id:1,
        checked: true,
    item: "Practice coding"},

    {id:1,
        checked: true,
    item: "Play cricket"},

    {id:1,
        checked: true,
    item: "Read about AI"}
    ]
    );

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
<ul>
{items.map((item) => (
    <li>
        <input 
        type="checkbox"
        checked = {item.checked}
         />
         <label>{item.item}</label>
         <FaTrashAlt />

    </li>
))}
</ul>
    </main>
  )
}

export default Contents