import ItemRepository from "@/app/repositories/ItemRepository";

export default function CartComponent({cart, cartItems}) {
    let totalPrice = 0;
    const listItems = Object.values(cartItems).map(cartItem => {
        const itemsRepo = new ItemRepository();
        const item = itemsRepo.getById(cartItem.itemId);
        totalPrice += item.price * cartItem.quantity;
        return <li key={cartItem.itemId}>
            <img src={item.image} width="30" height="30" />
            <h4>{item.name} <i>({item.price/100}€)</i></h4> 
            <span>{cartItem.quantity}</span>
        </li>
    });
      
    return <>
        <span>Total price: {totalPrice/100}€</span>
        <ul>{listItems}</ul>
    </>
}