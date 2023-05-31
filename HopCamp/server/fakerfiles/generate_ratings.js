import faker from "faker";

const generateFakeRating = ()=> {
    const ratings = {
        username: faker.internet.userName(),
        pic_url: faker.image.imageUrl(),
        date: faker.date.past().toISOString().slice(0, 10),
        recommend: faker.datatype.boolean(),
        campsite: faker.lorem.words(2),
        top_line: faker.lorem.sentence(),
        narrative: faker.lorem.paragraph(),
    };
    return ratings;
};

const numberOfRatings = 10;
const ratingCollection = [];

for (let i = 0; i < numberOfRatings; i++) {
    ratingCollection.push(generateFakeRating());
}
// console.log(ratingCollection);

export default ratingCollection;

