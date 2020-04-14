const readlineSync = require('readline-sync')

const ascii = require('./ascii')

// to get the input from the user 
let input = readlineSync.question("Please provide the input letters:")

let arr = input.split('')

    // console.log(arr);

const binaryConversion = (params) => {
    if (params <=1) {
        console.log(params);
    } else {
        binaryConversion(params / 2)
        console.log(params%2);
    }
}

const compare = (newArr) =>{
    for (const i in newArr) {
        if (newArr.hasOwnProperty(i)) {
            let element = newArr[i]; 
            let asciiValue = ascii.ascii[element]
            console.log(asciiValue);
            console.log(newArr);
            
        }
    }
}



compare(arr)