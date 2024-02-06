import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";
import { useState } from "react";
import AddItem from "./AddItem";


// Lets create a Grocery list creating app to learn about React concepts

function App() {

  const [items, setItems] = useState([
    { id: 1, checked: true, item: "Practice coding" },

    { id: 2, checked: false, item: "Play cricket" },

    { id: 3, checked: false, item: "Read about AI" },
  ]);

const [newItem, setNewItem] = useState('')

  const handleCheckkk = (id) => {
    const listItems = items.map((item) => item.id===id ? {...item, checked: !item.checked} : item)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify())
    }
    
    const handleDelete = (id) => {
    const listItems = items.filter
    ((item) => item.id !== id)
    setItems(listItems)
    localStorage.setItem("todo_list", JSON.stringify())
    
    }

    const handleSubmit = (e) => {
      console.log("submitted")
    }

  return (

<div className="App">
{/* Importing Header component inside the App component and declaring it in the below line */}
<Header title = "List to do!"/> {/* The title property mentioned here is to explain the concept of prop drilling */}
<AddItem
newItem = {newItem}
setNewItem = {setNewItem}
handleSubmit = {handleSubmit} 
/>
<Contents
items = {items}
handleCheckkk = {handleCheckkk}
handleDelete = {handleDelete}
/>
<Footer
length = {items.length}
/>


</div>
  );
}

export default App;
