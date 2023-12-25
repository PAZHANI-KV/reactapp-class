import React from 'react'
import { FaTrashAlt } from "react-icons/fa";


const LineItems = ({item, handleCheckkk, handleDelete}) => {
  return (
    <li className="item" key={item.id}>
    {/* The key attribute mentioned above is very essential for a listed element in react. Because, it is very difficult for a React to remember which state belongs to which particular list. This will cause serious issue and errors. In order to handle this, we are using key attribute. Hence, we are giving individual id for every list and giving a particular key value for every list and using it as a reference to remember. Now the react will be able to remember which particular key is for which particular state. This will help react from occuring errors in list!  */}

    <input
      type="checkbox"
      onChange={() => handleCheckkk(item.id)}
      checked={item.checked}
    />
    <label
      style={item.checked ? { textDecoration: "line-through" } : null}
      onDoubleClick={() => handleCheckkk(item.id)}
    >
      {item.item}
    </label>
    <FaTrashAlt
      role="button"
      onClick={() => handleDelete(item.id)}
      tabIndex="0"
      aria-label={`Delete ${item.item}`}
    />
  </li>
  )
}

export default LineItems