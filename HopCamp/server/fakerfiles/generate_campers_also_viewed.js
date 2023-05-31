import faker from "faker";

const generateCampersAlsoViewed = () => {
  const alsoViewedLocation = {
    description: faker.lorem.sentence(),
    pic_url: faker.internet.url(),
    rating: faker.datatype.number({ min: 1, max: 100 }),
    num_of_ratings: faker.datatype.number({ min: 1, max: 1000 }),
    acres: faker.datatype.number({ min: 1, max: 100 }),
    location: faker.lorem.words(),
    price: faker.datatype.number({ min: 1, max: 1000 }),
  };
  return alsoViewedLocation;
};

const numberOfLocations = 10000;
const fakeSpots = [];

for (let i = 0; i < numberOfLocations; i++) {
  fakeSpots.push(generateCampersAlsoViewed());
}

export default fakeSpots;
