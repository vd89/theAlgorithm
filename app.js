const readlineSync = require('readline-sync')

const ascii = require('./ascii')

// to get the input from the user 
let input = readlineSync.question("Please provide the input letters:")

let arr = input.split('')

    // console.log(arr);

let toBinary = (n) => {
    let remArr = []
    let resArr = []
    if (n>=0) {
        while (n) {
            let q = parseInt(n / 2)
            remArr.push(n % 2)
            n = q            
        }
        for (let i = remArr.length - 1; i >= 0; i--){
            resArr.push(remArr[i])
        }
        return parseInt(resArr.join(''))
    } else {
        return 
    }
}


const compare = (newArr) =>{
    for (const i in newArr) {
        if (newArr.hasOwnProperty(i)) {
            let element = newArr[i]; 
            let asciiValue = ascii.ascii[element]
            console.log(toBinary(asciiValue));
            console.log(newArr)
            
        }
    }
}



compare(arr)
// binaryConversion(arr)