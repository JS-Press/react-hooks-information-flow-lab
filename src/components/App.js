import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import HeaderElement from "./Header"

function App() {
  const [items, setItems] = useState(itemData);
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <HeaderElement isDarkMode = {isDarkMode} onDarkModeClick = {handleDarkModeClick} />
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
