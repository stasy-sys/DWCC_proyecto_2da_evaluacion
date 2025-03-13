import Item from '@/app/models/item';
import { faker } from '@faker-js/faker/locale/en';

export default function CreateRandomItem({saveItem}) {
    function createRandom(){
        const imgNum = faker.number.int({ min: 1, max: 11 });
        const item = new Item(
            null,
            faker.commerce.productName(),
            faker.commerce.productDescription(),
            Math.round(faker.commerce.price({min: 80, max: 450})*100),
            `/uploads/${("000"+imgNum).slice(-3)}.webp`, //faker.image.url(),
            faker.number.int({ min: 10, max: 120, multipleOf: 10 }),
        );
        saveItem(item);
    }

    return <>
    <button onClick={createRandom}>Create random item</button>
    </>
}