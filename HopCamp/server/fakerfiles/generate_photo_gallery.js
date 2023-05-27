import faker from "faker";

const photoGallery = () => {
  const photos = {
    pic: faker.internet.url(),
    url: faker.internet.url(),
  };
  return photos;
};

const fakePhotoAmount = 10000;
const fakeCampingPhotos = [];

for (let i = 0; i < fakePhotoAmount; i++) {
  fakeCampingPhotos.push(photoGallery());
}

export default fakeCampingPhotos;
