import React, {useState} from "react";

function Item({ name, category }) {

  const [isInCart, setIsInCart] = useState(false) 

  function addItem() {
    setIsInCart(isInCart => !isInCart)
  }
  
  const itemInCart = isInCart ? "in-cart" : ""

  return (
    <li className={itemInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addItem}> {isInCart? "Remove From Cart" : "Add to Cart"} </button>
    </li>
  );
}

export default Item;
