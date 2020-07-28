const getNumLessThanTen = require('./getNumLessThan.js');
const waitOneSecond = require('./waitOneSecond');
const writeToFile = require('./writeToFile');



/*
get a random number less than 10,
then, wait three seconds
then, write the number to the hard drive
Then, once all that is done, console log "I'm done!"
CONSTRAINTS
- You must use "getNumLessThan.js" to generate your random number. Note: the "getNumLessThan.js" file is just an overly complicated way to make getting a random number asynchronous (there is no reason for it to be asynchronous, other than as an exercise).
- No editing any file except main.js (comments are the exception)
*/

//generate a random number less than 10
getNumLessThanTen((err, randNum) => {
  //if an error occurs
  if (err) {
    //log the error
    console.log(err)
    //otherwise
  } else {
    //wait three seconds
    waitOneSecond((err, success) => {
      if (err) {
        console.log(err)
      } else {
        console.log('One second has passed');
        waitOneSecond((err, success) => {
          if (err) {
            console.log(err)
          } else {
            console.log('Two seconds have passed');
            waitOneSecond((err, success) => {
              if (err) {
                console.log(err)
              } else {
              console.log('Three seconds have passed');
              writeToFile(randNum, (err) => {
                if (err) {
                  console.log(err)
                }
              })
              }
            })
          }
        })
      }
    })
  }
})
