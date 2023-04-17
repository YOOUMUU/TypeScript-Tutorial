"use strict";
// let greet: Function;
// example 1
let greet; //ab只是说这里有两个参数，也可以用任何字母或词代替
greet = (name, greeting) => {
    console.log(`${name} says ${greeting}`);
};
// 这里的参数类型要和签名（signature）（上面那个）匹配
// example 2
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        // 因为一定要return数字，所以没有else也会error
        return numOne - numTwo;
    }
};
// example 3
let logDetails;
logDetails = (ninja) => {
    console.log(`${ninja.name} is ${ninja.age} years old`);
};
