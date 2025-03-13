'use client'
import React from 'react';
import { useState } from 'react';
import { redirect } from 'next/navigation';

import Cart from '@/app/models/Cart';
import CartRepository from '@/app/repositories/CartRepository';
import CreateItemForm from './components/CreateItemForm';
import CreateRandomItem from './components/CreateRandomItem';
import ItemsList from './components/ItemsList';
import ItemRepository from '@/app/repositories/ItemRepository';
import CartComponent from './components/CartComponent';
import UserRepository from '../repositories/UserRepository';
import HeaderComponent from '../components/HeaderComponent';

export default function Shop() {
    const cartRepo = new CartRepository();
    const userRepo = new UserRepository();
    const user = userRepo.getActiveUser();
    if (user === null) {
        redirect("/register");
    }
    let [cart, setCart] = useState(cartRepo.getById(user.cartId));
    if (cart === undefined){
        cart = new Cart(null);
        cartRepo.save(cart);
        setCart(cart);
        user.cartId = cart.id;
        userRepo.save(user);
    }
    const [cartItems, setCartItems] = useState(cart.itemsList);
    function saveCart(cart){
        cartRepo.save(cart);
        setCart(cart);
        // Why do I need this?
        setCartItems({...cart.itemsList});
        console.log(cart, cartItems);
    }
    function addItemToCart(item, quantity=1){
        cart.addItem(item, quantity);
        saveCart(cart);
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

    return <>
        <HeaderComponent user={user}/>
        <div>
            {user.isAdmin &&<>
                <CreateItemForm saveItem={saveItem} />
                <CreateRandomItem saveItem={saveItem} />
            </>}
            <CartComponent cart={cart} addItemToCart={addItemToCart} saveCart={saveCart}/>
            <ItemsList
                user={user}
                addItemToCart={addItemToCart}
                items={items}
                saveItem={saveItem}
                deleteItem={deleteItem}
            />
        </div>
    </>;
}
