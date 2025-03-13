import { useState } from 'react';

import styles from './CartComponent.module.css'

import ItemRepository from "@/app/repositories/ItemRepository";

export default function CartComponent({cart, addItemToCart, saveCart}) {
    const [isHidden, setIsHidden] = useState(true);
    function deleteItem(item){
        cart.deleteItem(item);
        saveCart(cart);
    }
    function emptyCart(){
        cart.itemsList = {};
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
                <button onClick={() => addItemToCart(item, -1)}>{"➖"}</button>
                <span className={styles.quantity}>{cartItem.quantity}</span>
                <button onClick={() => addItemToCart(item, 1)}>{"➕"}</button>
            </span>
            <button onClick={() =>deleteItem(item)}>❌</button>
            <span className={styles.quantity}>Subtotal: {cartItem.quantity*item.price/100}€</span>
        </li>
    });
      
    return <>
        <button className={styles.cartButton} onClick={() => setIsHidden(!isHidden)}>🛒</button>
        <div className={styles.cart} hidden={isHidden}>
            <h2>Total price: {totalPrice/100}€</h2>
            <ul>{listItems}</ul>
            <button onClick={() => emptyCart()}>Purchase Items</button>
        </div>
    </>
}