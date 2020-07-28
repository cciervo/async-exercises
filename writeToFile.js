const fs = require('fs');

const writeToFile = (data, callback) => {
  fs.writeFile('numFile.txt', data, 'utf8', (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log(data);
      callback('wrote to file!');
    }
  });
};

module.exports = writeToFile;

