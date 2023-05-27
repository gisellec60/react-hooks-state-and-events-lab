import React, {useState} from "react";
import ShoppingList from "./ShoppingList"; 
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
   //const appClass = islight ? "App dark" : "App light"
  
  const [isLight, setIsLight] = useState(false) 

  function chgMode () {
    setIsLight(isLight => !isLight) 
  } 

  const appClass = isLight ? "App dark" : "App light"
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={chgMode}>{isLight ? "App Light" : "App Dark"} </button>
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