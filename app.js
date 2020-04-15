const readlineSync = require("readline-sync");

const ascii = require("./ascii");

// to get the input from the user
let input = readlineSync.question("Please provide the input letters:");

let arr = input.split("");

// console.log(arr);

let toBinary = (n) => {
  let remArr = [];
  let resArr = [];
  if (n >= 0) {
    while (n) {
      let q = parseInt(n / 2);
      remArr.push(n % 2);
      n = q;
    }
    for (let i = remArr.length; i >= 0; i--) {
      resArr.push(remArr[i]);
      if (resArr[0] == undefined) {
        resArr.shift();
        resArr.unshift(0);
      }
    }
    return resArr.join("");
  } else {
    return;
  }
};



const output = arr.map(item => {
    const ascValue = ascii.ascii[item]
    return (toBinary(ascValue))
})

console.log(output);

// Please provide the input letters:aB cD
//[ '01100001', '01000010', '0100000', '01100011', '01000100' ] 