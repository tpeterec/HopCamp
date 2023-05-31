import faker from "faker";

const generateFakeTents = ()=> {
    const tents = {
      price: faker.datatype.number({ min: 0, max: 1000 }),
      icon: faker.image.imageUrl(),
      lat: parseFloat(faker.address.latitude()),
      long: parseFloat(faker.address.longitude()),
    };
    return tents;
};

const numberOfTents = 10;
const tentsCollection = [];

for (let i = 0; i < numberOfTents; i++) {
    tentsCollection.push(generateFakeTents());
}
// console.log(tentsCollection);

export default tentsCollection;


