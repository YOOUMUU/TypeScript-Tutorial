// explicit types 明确类型
var character;
var age;
var isLoggedIn;
// age = "luigi"; //error
age = 30;
isLoggedIn = true;
// arrays
var ninjas = [];
// 初始化数组为空数组，才可以用数组方法如push
ninjas.push("shaun");
// ninjias = [0, 1]; //error
ninjas = ["mario", "yoshi"];
// union types 联合类型
var mixed = [];
mixed.push("hello");
mixed.push(0);
// 单个变量
var uid;
uid = "123";
uid = 12;
// uid = false; //error
// objects
var ninjaOne;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = []; //数组是特殊的对象
// ninjaOne = ""; //error
// 明确变量是对象，并指定对象内部属性的类型
var ninjaTwo;
ninjaTwo = {
    name: "mario",
    age: 30,
    beltColor: "blue",
};
