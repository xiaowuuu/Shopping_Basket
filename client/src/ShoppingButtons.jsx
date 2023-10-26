import React, { useState } from "react";

function ShoppingButtons({ itemName, updateTotalPrice, itemQuantity, setItemQuantity }) {
    const decreaseItem = () => {
        if (itemQuantity > 0) {
        setItemQuantity(itemQuantity - 1);
        updateTotalPrice(itemName, itemQuantity - 1);
        }
    };

    const increaseItem = () => {
        setItemQuantity(itemQuantity + 1);
        updateTotalPrice(itemName, itemQuantity + 1);
    };

    return (
        <>
        <button className="shopping-btn" onClick={decreaseItem}>-</button>
        {itemQuantity}
        <button className="shopping-btn" onClick={increaseItem}>+</button>
        </>
    );
}

export default ShoppingButtons;
