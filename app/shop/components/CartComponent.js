import { useState } from 'react';

import ItemRepository from "@/app/repositories/ItemRepository";

export default function CartComponent({cart, addItemToCart, saveCart}) {
    const [isHidden, setIsHidden] = useState(true);
    function deleteItem(item){
        cart.deleteItem(item);
        saveCart(cart);
    }
    let totalPrice = 0;
    const listItems = Object.values(cart.itemsList).map(cartItem => {
        const itemsRepo = new ItemRepository();
        const item = itemsRepo.getById(cartItem.itemId);
        totalPrice += item.price * cartItem.quantity;
        return <li key={cartItem.itemId}>
            <img src={item.image} width="30" height="30" />
            <h4>{item.name} <i>({item.price/100}€)</i></h4> 
            <span>
                <button onClick={() => addItemToCart(item, -1)}>{"<"}</button>
                {cartItem.quantity}
                <button onClick={() => addItemToCart(item, 1)}>{">"}</button>
            </span>
            <button onClick={() =>deleteItem(item)}>❌</button>
        </li>
    });
      
    return <>
        <button onClick={() => setIsHidden(!isHidden)}>🛒</button>
        <div hidden={isHidden}>
            <span>Total price: {totalPrice/100}€</span>
            <ul>{listItems}</ul>
        </div>
    </>
}