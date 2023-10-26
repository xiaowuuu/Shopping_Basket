import { useState } from "react";
import ShoppingButtons from "./ShoppingButtons";
import Header from "./Header";

function ShoppingPage(){
    //total starts from £0
    //total = item price * item amount - discount
    const [totalAmount, setTotalAmount] = useState(0);
    //buy one get one free promo code
    const [code, setCode] = useState("BUY1GET1FREE")
    //10% off on totals greater than 20
    
    //2% off on total for customers with loyalty cards
    const [loyalCard, setLoyalCard] = useState(true);
    

    function loyalDiscount() {

    }

    return (
        <>
        <Header/>
        <ShoppingButtons/>
        </>
    )
}

export default ShoppingPage;