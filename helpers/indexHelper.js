//Some code provided through class and reused from previouse modules in some places.  I also could not get it all working so I did not want to change things up / change names just yet to not have it ping for plagurizing.  Just incase it does, I apologize.

const fs = require('fs');
const util = require('util')
const readFromFile = util.promisify(fs.readFile);

const writeToFile = (destination, content) =>
fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
  err ? console.error(err) : console.info(`\nData written to ${destination}`)
);

const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
    } else {
      const parsedData = JSON.parse(data);
      console.log(data)
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
 };
 
 const uuid = () =>
   Math.floor((1 + Math.random()) * 0x10000)
     .toString(16)
     .substring(1);
 
 module.exports = { readFromFile, readAndAppend, uuid, writeToFile};