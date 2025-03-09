import Item from '@/app/models/item';
import { faker } from '@faker-js/faker/locale/en';

export default function CreateRandomItem({saveItem}) {
    function createRandom(){
        const item = new Item(
            null,
            faker.commerce.productName(),
            faker.commerce.productDescription(),
            faker.commerce.price(),
            faker.image.url(),
            faker.number.int({ min: 10, max: 120, multipleOf: 10 }),
        );
        saveItem(item);
    }

    return <>
    <button onClick={createRandom}>Create random item</button>
    </>
}