import React, {useState} from "react";
import ShoppingList from "./ShoppingList"; 
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
   //const appClass = islight ? "App dark" : "App light"
  const [lightMode, setLightMode] = useState(true)
  
  function chgMode () {
    setLightMode(lightMode => !lightMode)
  }
  const mode = lightMode ? "App light" : "App dark"
  
  return (
    <div className={mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={chgMode} >{lightMode ? "Dark Mode" : "Light Mode"} </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  ); 
}

export default App;

// return (
//   <div className={appClass}>
//     <header>
//       <h2>Shopster</h2>
//       <button>Dark Mode</button>
//     </header>
//     <ShoppingList items={itemData} />
//   </div>
// );
// }
// const [isLight, setIsLight] = useState(false) 

  // function chgMode () {
  //   setIsLight(isLight => !isLight) 
  // } 