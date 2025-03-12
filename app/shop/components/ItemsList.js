import styles from './ItemsList.module.css'
import EditItemForm from './EditItemForm';

export default function ItemsList({addItemToCart, items, saveItem, deleteItem}) {
    const listItems = Object.values(items).map(item =>
        <li key={item.id}>
          <img title={item.description} src={item.image} width="130px" height="130px" />
          <h4>{item.name} <i>({item.price/100}€)</i></h4> 
          {/* <p>{item.description}</p> */}
          <button onClick={() => deleteItem(item)}>❌</button>
          <EditItemForm item={item} saveItem={saveItem}/>
          <button onClick={() => addItemToCart(item)}>🛒</button>
        </li>
      );
      
      return (
        <ul className={styles.items}>{listItems}</ul>
      );
}