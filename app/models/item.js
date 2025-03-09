export default class Item {
    constructor( id, name, description, price, image=null, stock=0) {
        // For creating new Items, we set the id to null
        this.id = id;
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.stock = stock;
    }
}
