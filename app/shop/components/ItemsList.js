import EditItemForm from './EditItemForm';

export default function ItemsList({items, saveItem, deleteItem}) {
    const listItems = Object.values(items).map(item =>
        <li key={item.id}>
           <img src={item.image} width="30" height="30" />
          <h4>{item.name} <i>({item.price}€)</i></h4> 
          <p>{item.description}</p>
          <button onClick={() => deleteItem(item)}>X</button>
          <EditItemForm item={item} saveItem={saveItem}/>
        </li>
      );
      
      return (
        <ul>{listItems}</ul>
      );
}