import React from "react";

function HeaderElement({onDarkModeClick, isDarkMode}){
    return (
<header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick} >
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )}


export default HeaderElement;