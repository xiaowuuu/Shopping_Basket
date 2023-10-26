import React, { useState } from 'react';

function ShoppingPage() {
    const [basket, setBasket] = useState([]);
    const availableItems = [
        { id: 1, name: 'Peace Lily', price: 14.99 },
        { id: 2, name: 'Peach Flamingo Flower', price: 28.00 },
        { id: 3, name: 'Ebony Flamingo Flower', price: 14.99 }
    ];

    const addItemToBasket = (itemId) => {
        setBasket((prevBasket) => {
            const item = availableItems.find((item) => item.id === itemId);
            if (item) {
                const newBasket = [...prevBasket, item];
                applyDiscounts(newBasket); // Apply discounts to the updated basket.
                return newBasket;
            }
            return prevBasket;
        });
    };

    const removeItemFromBasket = (itemId) => {
        setBasket((prevBasket) => {
            const updatedBasket = prevBasket.filter((item) => item.id !== itemId);
            applyDiscounts(updatedBasket); // Apply discounts to the updated basket.
            return updatedBasket;
        });
    };

    const applyDiscounts = (basket) => {
        const discountedBasket = basket.map((item) => {
            if (basket.filter((i) => i.id === item.id).length > 1) {
                return { ...item, price: 0 };
            }
            return item;
        });

        // 10% off on totals greater than £20
        const totalPrice = discountedBasket.reduce((total, item) => total + item.price, 0);
        let discountedTotal = totalPrice;
        if (totalPrice > 20) {
            discountedTotal = totalPrice * 0.9;
            discountedBasket.forEach((item) => {
                item.price = (item.price / totalPrice) * discountedTotal;
            });
        }
    };

    const calculateTotalPrice = (basket) => {
        applyDiscounts(basket); 
        return basket.reduce((total, item) => total + item.price, 0);
    };

    const emptyBasket = () => {
        setBasket([]);
    };

    return (
        <>
            <h3>GREEN PLANT</h3>
            <div>
                {availableItems.map((item) => (
                    <div key={item.id}>
                        {item.name} - £{item.price.toFixed(2)}
                        <button onClick={() => addItemToBasket(item.id)}>Add</button>
                        <button onClick={() => removeItemFromBasket(item.id)}>Remove</button>
                    </div>
                ))}
            </div>

            <div>
                <h3>Your Basket</h3>
                <ul id="basket-list">
                    {basket.map((item) => (
                        <li key={item.id}>
                            {item.name} - £{item.price.toFixed(2)}
                        </li>
                    ))}
                </ul>
                <p>
                    Total: £
                    {calculateTotalPrice(basket).toFixed(2)}
                </p>
            </div>
            <button onClick={emptyBasket}>Empty Basket</button>
        </>
    );
}

export default ShoppingPage;
