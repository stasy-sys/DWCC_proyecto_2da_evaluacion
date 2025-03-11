import Cart from "../models/Cart";

export default class CartRepository{
    save(cart) {
        let carts = JSON.parse(localStorage.getItem("carts") || '{}');

        if (cart.id != null && carts[cart.id] === undefined) {
            console.error(`id does not exist in the cart storage. id: ${cart.id}`);
            return;
        }

        if (cart.id == null){
            let lastId = parseInt(localStorage.getItem("carts-last-id") || "0");
            lastId += 1;
            cart.id = lastId;
            localStorage.setItem("carts-last-id", lastId);
        }

        carts[cart.id] = cart;
        localStorage.setItem('carts', JSON.stringify(carts));
    }

    getAll() {
        let carts = {};
        for (const [key, cart] of Object.entries(JSON.parse(localStorage.getItem("carts") || '{}'))){
            carts[key] = new Cart(cart.id, cart.itemsList);
        }
        return carts;
    }

    getById(id){
        const cart = JSON.parse(localStorage.getItem("carts") || '{}')[id];
        if (cart === undefined) {
            return cart;
        }
        return new Cart(cart.id, cart.itemsList);
    }

    delete(cart) {
        let carts = JSON.parse(localStorage.getItem("carts") || '{}');
        delete carts[cart.id];
        localStorage.setItem('cart', JSON.stringify(cart));
    }

     
}