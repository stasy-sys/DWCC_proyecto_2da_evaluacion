'use client'
import React from 'react';
import { useState } from 'react';
import Cart from '@/app/models/Cart';
import CartRepository from '@/app/repositories/CartRepository';
import CreateItemForm from './components/CreateItemForm';
import CreateRandomItem from './components/CreateRandomItem';
import ItemsList from './components/ItemsList';
import ItemRepository from '@/app/repositories/ItemRepository';
import CartComponent from './components/CartComponent';

export default function Shop() {
    const cartRepo = new CartRepository();
    const [cart, setCart] = useState(cartRepo.getById(1));
    const [cartItems, setCartItems] = useState(cart.itemsList);
    function saveCart(cart){
        cartRepo.save(cart);
        setCart(cart);
        setCartItems({...cart.itemsList});
        console.log(cart, cartItems);
    }
    function addItemToCart(item, quantity=1){
        cart.addItem(item, quantity);
        saveCart(cart);
    }

    if (cart === undefined){
        let newCart = new Cart(null);
        console.log(newCart);
        cartRepo.save(newCart);
        setCart(newCart);
    }

    const itemRepo = new ItemRepository();
    const [items, setItems] = useState(itemRepo.getAll());
    function saveItem(item){
        itemRepo.save(item);
        setItems(itemRepo.getAll());
    }
    function deleteItem(item){
        itemRepo.delete(item);
        setItems(itemRepo.getAll());
        cart.deleteItem(item);
        saveCart(cart);
        for (let cart of Object.values(cartRepo.getAll())){
            cart.deleteItem(item);
            cartRepo.save(cart);
        }
    }

    return (
        <div>
            <CreateItemForm saveItem={saveItem} />
            <CreateRandomItem saveItem={saveItem} />
            <ItemsList
                addItemToCart={addItemToCart}
                items={items}
                saveItem={saveItem}
                deleteItem={deleteItem}
            />
            <CartComponent cart={cart} cartItems={cartItems}/>
        </div>
    );
}
