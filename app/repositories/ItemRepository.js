export default class ItemRepository {
    save(item) {
        let items = JSON.parse(localStorage.getItem("items") || '{}');

        if (item.id != null && items[item.id] === undefined) {
            console.error(`id does not exist in the items storage. id: ${item.id}`);
            return;
        }

        if (item.id == null){
            let lastId = parseInt(localStorage.getItem("items-last-id") || "0");
            lastId += 1;
            item.id = lastId;
            localStorage.setItem("items-last-id", lastId);
        }

        items[item.id] = item;
        localStorage.setItem('items', JSON.stringify(items));
    }

    getAll() {
        return JSON.parse(localStorage.getItem("items") || '{}');
    }

    getById(id){
        return JSON.parse(localStorage.getItem("items") || '{}')[id];
    }

    delete(item) {
        let items = JSON.parse(localStorage.getItem("items") || '{}');
        delete items[item.id];
        localStorage.setItem('items', JSON.stringify(items));
    }
}