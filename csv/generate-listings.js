const { createWriteStream } = require('fs');
const { lorem, commerce, random, address } = require('faker');

let writeStream = createWriteStream('./listings2.csv');

const categories = ['Entire guesthouse', 'Entire house', 'Entire apartment', 'Entire cabin', 'Entire guest suite', 'Entire cottage', 'Entire villa', 'Entire bungalow', 'Private room', 'Entire loft', 'Shared room'];

function writeTenMillionTimes(writer, encoding, callback) {
  let i = 5000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 5000000) {
        let data = 'id,category,beds,title,price,score,reviews,city,state,country\n';
        writer.write(data, encoding);
      } else if (i === 0) {
        let data = `${i + 5000001},${categories[Math.floor(Math.random() * 11)]},${Math.floor(Math.random() * 21)},${lorem.words()},${Math.floor(commerce.price())},${(Math.random() * 2 + 3).toFixed(2)},${Math.floor(random.number() / 100)},${address.city()},${address.state()},United States\n`;
        ok = writer.write(data, encoding, callback);
      } else {
        let data = `${i + 5000001},${categories[Math.floor(Math.random() * 11)]},${Math.floor(Math.random() * 21)},${lorem.words()},${Math.floor(commerce.price())},${(Math.random() * 2 + 3).toFixed(2)},${Math.floor(random.number() / 100)},${address.city()},${address.state()},United States\n`;
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

writeTenMillionTimes(writeStream, 'utf8', () => {writeStream.end()});
