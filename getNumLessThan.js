//generates random number by taking the given num and multiplying it by Math.random
const generateRandomNum = (num) => {
  return (Math.random() * num);
}

// //generates a random delay
// const generateRandomDelay = () => {
//   return generateRandomNum(10) * 500;
//   // return 2000;
// }

//getNumberLessThan takes a callback as an arg;
const getNumLessThanTen = (callback) => {
  setTimeout(() => {
    const randNum = generateRandomNum(10);
    callback(null, randNum);
  }, 1000);
};

// module.exports.getNumLessThanTen = getNumLessThanTen;
module.exports = getNumLessThanTen;

