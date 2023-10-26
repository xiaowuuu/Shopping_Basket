import React, { useState } from "react";
import ShoppingButtons from "./ShoppingButtons";
import Header from "./Header";

function ShoppingPage() {
    const [totalPrice, setTotalPrice] = useState(0);
    //assume user has loyal card
    const [loyalCard, setLoyalCard] = useState(true);
    //promo code discount
    const [code, setCode] = useState("BUY1GET1FREE");
    const [itemQuantities, setItemQuantities] = useState({
        peaceLily: 0,
        peachFlamingoFlower: 0,
        ebonyFlamingoFlower: 0,
    });


    const itemPrices = {
        peaceLily: 14.99,
        peachFlamingoFlower: 28,
        ebonyFlamingoFlower: 14.99,
    };


    const updateTotalPrice = () => {
        let subTotal = 0;
        for (const item in itemPrices) {
            subTotal += itemPrices[item] * itemQuantities[item];
        }

        //loyal card discount 2%
        if (loyalCard) {
        subTotal *= 0.98; 
        }

    setTotalPrice(subTotal);
    };

    return (
        <>
        <Header />
        <div>
            Peace Lily £{itemPrices.peaceLily}
            <ShoppingButtons
            itemName="peaceLily"
            itemQuantity={itemQuantities.peaceLily}
            updateTotalPrice={updateTotalPrice}
            setItemQuantity={(quantity) =>{
                setItemQuantities({ ...itemQuantities, peaceLily: quantity });
                updateTotalPrice();
            }
            }
            />
        </div>
        <div>
            Peach Flamingo Flower £{itemPrices.peachFlamingoFlower}
            <ShoppingButtons
            itemName="peachFlamingoFlower"
            itemQuantity={itemQuantities.peachFlamingoFlower}
            updateTotalPrice={updateTotalPrice}
            setItemQuantity={(quantity) =>{
                setItemQuantities({ ...itemQuantities, peachFlamingoFlower: quantity })
                updateTotalPrice();
            }
            }
            />
        </div>
        <div>
            Ebony Flamingo Flower £{itemPrices.ebonyFlamingoFlower}
            <ShoppingButtons
            itemName="ebonyFlamingoFlower"
            itemQuantity={itemQuantities.ebonyFlamingoFlower}
            updateTotalPrice={updateTotalPrice}
            setItemQuantity={(quantity) =>{
                setItemQuantities({ ...itemQuantities, ebonyFlamingoFlower: quantity })
                updateTotalPrice();
            }
            }
            />
        </div>
        <div><input></input><button>APPLY</button></div>
        <p>try: BUY1GET1FREE</p>

        <div>YOUR ORDER: </div>
        <div>Total £{totalPrice.toFixed(2)}</div>
        </>
    );
    }

export default ShoppingPage;
