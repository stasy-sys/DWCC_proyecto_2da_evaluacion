import { useState } from 'react';

import Item from '@/app/models/item';
import styles from './styles.module.css'

export default function EditItemForm({item, saveItem}) {
    const [isHidden, setIsHidden] = useState(true);

    function save(formData) {
        const changedItem = new Item(
            item.id,
            formData.get("name"),
            formData.get("description"),
            formData.get("price"),
            formData.get("image"),
            formData.get("stock"),
        );
        saveItem(changedItem);
        setIsHidden(true);
    }

    return <>
    <button onClick={() => setIsHidden(false)}>✏️</button>
    <div hidden={isHidden}>
        <form action={save} className={styles.form}>
            <label htmlFor="name">Name</label><input name="name" type="text" defaultValue={item.name}/>
            <label htmlFor="name">Description</label><input name="description" type="text" defaultValue={item.description}/>
            <label htmlFor="name">Price</label><input name="price" type="text" defaultValue={item.price}/>
            <label htmlFor="name">Image</label><input name="image" type="text" defaultValue={item.image}/>
            <label htmlFor="name">Stock</label><input name="stock" type="text" defaultValue={item.stock}/>
            <input type="submit" value="Save Item" />
        </form>
    </div>
    </>
}