const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const faker = require('faker');

const csvWriter = createCsvWriter({
  path: 'listings.csv',
  header: [
    {id: 'category', title: 'category'},
    {id: 'beds', title: 'beds'},
    {id: 'title', title: 'title'},
    {id: 'price', title: 'price'},
    {id: 'score', title: 'score'},
    {id: 'reviews', title: 'reviews'},
    {id: 'city', title: 'city'},
    {id: 'state', title: 'state'},
    {id: 'country', title: 'country'},
  ]
});

const categories = ['Entire guesthouse', 'Entire house', 'Entire apartment', 'Entire cabin', 'Entire guest suite', 'Entire cottage', 'Entire villa', 'Entire bungalow', 'Private room', 'Entire loft', 'Shared room'];

const data = [];

for (let i = 0; i < 2; i++) {
  let listing = {
    category: categories[Math.floor(Math.random() * 11)],
    beds: Math.floor(Math.random() * 21),
    title: faker.lorem.words(),
    price: faker.commerce.price(),
    score: Math.floor(Math.random() * 6),
    reviews: Math.floor(faker.random.number() / 100),
    city: faker.address.city(),
    state: faker.address.state(),
    country: faker.address.country(),
  }
  data.push(listing);
}

csvWriter
  .writeRecords(data)
  .then(()=> console.log('The CSV file was written successfully'));
