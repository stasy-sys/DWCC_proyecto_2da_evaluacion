import Item from '@/app/models/item';
import styles from './CreateItemForm.module.css'

export default function CreateItemForm({saveItem}) {
    function save(formData) {
        const item = new Item(
            null,
            formData.get("name"),
            formData.get("description"),
            formData.get("price"),
            formData.get("image"),
            formData.get("stock"),
        );
        saveItem(item);
    }

    return <>
    <form action={save} className={styles.form}>
        <label htmlFor="name">Name</label><input name="name" type="text"/>
        <label htmlFor="name">Description</label><input name="description" type="text"/>
        <label htmlFor="name">Price</label><input name="price" type="text"/>
        <label htmlFor="name">Image</label><input name="image" type="text"/>
        <label htmlFor="name">Stock</label><input name="stock" type="text"/>
        <input type="submit" value="Create New Item" />
    </form>
    </>
}