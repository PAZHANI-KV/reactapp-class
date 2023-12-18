import Header from "./Header";
import Footer from "./Footer";
import Contents from "./Contents";


// Lets create a Grocery list creating app to learn about React concepts

function App() {

  return (

<div className="App">
{/* Importing Header component inside the App component and declaring it in the below line */}
<Header />
<Contents/>
<Footer/>


</div>
  );
}

export default App;
