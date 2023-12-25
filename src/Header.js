// rafce (Shortcut to generate basic arrow function)

import React from 'react'

/* const headerStyle = {
  backgroundColor: "mediumblue",
  color: "white"
} */

const Header = (props) => {
  return (
    <header /* style={headerStyle} */ >
        <h1>{props.title}</h1> {/* The prop drilling is explained here. The prop title is borrowed here from app.js file */}
    </header>
  )
}

Header.defaultProps = {
  title: "To do List!"
}  // This is default prop for Header file. If the above prop which is passed from app.js to this file has some error to render, then this default title will be rendered instead for the header file!
 
export default Header