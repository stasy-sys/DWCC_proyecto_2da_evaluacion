import Item from '@/app/models/item';
import { faker } from '@faker-js/faker/locale/en';

export default function CreateRandomItem({saveItem}) {
    function createRandom(){
        const imgNum = faker.number.int({ min: 0, max: 14 });
        const item = new Item(
            null,
            faker.commerce.productName(),
            faker.commerce.productDescription(),
            Math.round(faker.commerce.price({min: 1, max: 110})*100),
            `/uploads/img${("000"+imgNum).slice(-3)}.jpg`, //faker.image.url(),
            faker.number.int({ min: 10, max: 120, multipleOf: 10 }),
        );
        saveItem(item);
    }

    return <>
    <button onClick={createRandom}>Create random item</button>
    </>
}