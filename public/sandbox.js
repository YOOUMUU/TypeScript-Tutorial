"use strict";
// 自动赋类型为function
let great = () => {
    console.log("hello, world");
};
// great = "hello"; //error
let great2; // F要大写
great2 = () => {
    console.log("hello,world");
};
// 设置可选参数
const add = (a, b, c) => {
    console.log(a + b);
    console.log(c); //undefined
};
// 设置参数默认值
const add2 = (a, b, c = 10) => {
    console.log(a + b);
    console.log(c);
};
add(5, 10);
add(5, 10, "10");
// return 会自动推断并设置返回值的类型，上面没有return的function会自动返回void（空）
const minus = (a, b) => {
    return a + b;
};
let result = minus(10, 7);
// result = ""; //error
