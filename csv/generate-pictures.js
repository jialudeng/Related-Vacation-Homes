const { createWriteStream } = require('fs');

let writeStream = createWriteStream('./pictures.csv');

function writeFiftyMillionTimes(writer, encoding, callback) {
  let i = 50000001;
  write();
  function write() {
    let ok = true;
    do {
      i--;
      if (i === 50000000) {
        let data = 'url,listing\n';
        writer.write(data, encoding);
      } else if (i === 0) {
        let random = Math.random();
        let data = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo${Math.floor(random * 40)},${Math.ceil(random * 10000000)}\n`;
        ok = writer.write(data, encoding, callback);
      } else {
        let random = Math.random();
        let data = `http://airbnb-recommendation-photos.s3-website-us-west-1.amazonaws.com/photo${Math.floor(random * 40)},${Math.ceil(random * 10000000)}\n`;
        ok = writer.write(data, encoding);
      }
    } while (i > 0 && ok);
    if (i > 0) {
      writer.once('drain', write);
    }
  }
}

writeFiftyMillionTimes(writeStream, 'utf8', () => {writeStream.end()})
 