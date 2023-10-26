// decrease/increase and item amount
import { useState } from "react";

function ShoppingButtons(){
    const [itemAmount, setItemAmount] = useState(0);
    //item amount can never lower than 0
    const decreaseItem = ()=> {
        if(itemAmount > 0) {
            setItemAmount(itemAmount - 1);
        }
    };
    const increaseItem = () => {
        setItemAmount(itemAmount + 1);
    };
    return (
        <>
        <button className="shopping-btn" onClick={decreaseItem}>-</button>{itemAmount}<button className="shopping-btn" onClick={increaseItem}>+</button>
        </>
    )
}

export default ShoppingButtons;