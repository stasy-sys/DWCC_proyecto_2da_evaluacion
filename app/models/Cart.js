
import CartItem from '@/app/models/CartItem';

export default class Cart{
    constructor(id, itemsList={}) {
        this.id = id;
        this.itemsList = itemsList;
    }

    addItem(item, quantity=1){
        let cartItem = this.itemsList[item.id];
        if (cartItem === undefined){
            cartItem = new CartItem(item.id);
        }
        cartItem.quantity += quantity;
        if (cartItem.quantity <= 0){
            delete this.itemsList[item.id];
            return;
        }
        this.itemsList[item.id] = cartItem;
    }

    deleteItem(item){
        delete this.itemsList[item.id];
    }
}
