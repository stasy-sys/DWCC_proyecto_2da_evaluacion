import Item from '@/app/models/item';
import styles from './CreateItemForm.module.css'

export default function CreateItemForm({saveItem}) {
    function save(formData) {
        const item = new Item(
            null,
            formData.get("name"),
            formData.get("description"),
            formData.get("price"),
            formData.get("image") || "/uploads/default.jpeg",
            formData.get("stock"),
        );
        saveItem(item);
    }

    return <>
    <form action={save} className={styles.form}>
        <label htmlFor="name">Name</label><input required={true} name="name" type="text"/>
        <label htmlFor="name">Description</label><input required={true} name="description" type="text"/>
        <label htmlFor="name">Price (cents)</label><input required={true} name="price" type="number" min="0"/>
        <label htmlFor="name">Image</label><input name="image" type="text" defaultValue={"/uploads/default.jpeg"}/>
        <label htmlFor="name">Stock</label><input required={true} type="number" min="1" name="stock"/>
        <input type="submit" value="Create New Item" />
    </form>
    </>
}