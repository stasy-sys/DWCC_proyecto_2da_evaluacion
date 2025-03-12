import { useState } from 'react';

import Item from '@/app/models/item';
import styles from './EditItemForm.module.css'

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
        <button onClick={() => setIsHidden(!isHidden)}>✏️</button>
        <div hidden={isHidden}>
            <div className={styles.modalWrapper}>
                <div className={styles.formWrapper}>
                <img src={item.image} width="200px" height="200px"/>
                <form action={save} className={styles.form}>
                    <span><label htmlFor="name">Name</label><input name="name" type="text" defaultValue={item.name}/></span>
                    <span><label htmlFor="name">Description</label><input name="description" type="text" defaultValue={item.description}/></span>
                    <span><label htmlFor="name">Price</label><input name="price" type="text" defaultValue={item.price}/></span>
                    <span><label htmlFor="name">Image</label><input name="image" type="text" defaultValue={item.image}/></span>
                    <span><label htmlFor="name">Stock</label><input name="stock" type="text" defaultValue={item.stock}/></span>
                    <span>
                        <input type="submit" value="Save Item" />
                        <input type="button" onClick={() => setIsHidden(true)} value="Close"/>
                    </span>
                </form>
                </div>
            </div>
        </div>
    </>
}