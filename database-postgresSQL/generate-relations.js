const { createWriteStream } = require('fs');

function writeTwelveMillionTimes(writer, encoding, callback) {
  let i = 120000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 120000000) {
        let data = 'listingone,listingtwo,similarity\n';
        writer.write(data, encoding);
      } else if (i === 0) {
        let data = `${Math.ceil(i / 12)},${Math.floor(Math.random() * 10000001)},${Math.floor(Math.random() * 101)}`;
        ok = writer.write(data, encoding, callback);
      } else {
        let data = `${Math.ceil(i / 12)},${Math.floor(Math.random() * 10000001)},${Math.floor(Math.random() * 101)}`;
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}
 
let writeStream = createWriteStream('./relations.csv');

writeTwelveMillionTimes(writeStream, 'utf8', () => {writeStream.end()})
 