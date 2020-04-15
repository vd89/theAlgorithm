const readlineSync = require("readline-sync");

const ascii = require("./ascii");

// to get the input from the user
let input = readlineSync.question("Please provide the input letters:");

let arr = input.split("");

// console.log(arr);

const toBinary = (n, bin = "") => {
     
  if (n<= 1) {
      bin = n + bin
      const ofZero = 8 - bin.length
      for (let i = 0; i < ofZero; i++){
          bin = "0" +bin
      }
      return bin
  } else {
      bin = Math.floor(n % 2) + bin
      return toBinary(Math.floor(n/2),bin)
  }
      
}



const output = arr.map(item => {
    const ascValue = ascii.ascii[item]
    return (toBinary(ascValue))
})

console.log(output);

// Please provide the input letters:aB cD
//[ '01100001', '01000010', '0100000', '01100011', '01000100' ] 