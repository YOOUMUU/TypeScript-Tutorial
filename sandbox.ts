// explicit types 明确类型
let character: string;
let age: number;
let isLoggedIn: boolean;

// age = "luigi"; //error
age = 30;
isLoggedIn = true;

// arrays
let ninjas: string[] = [];
// 初始化数组为空数组，才可以用数组方法如push

ninjas.push("shaun");
// ninjias = [0, 1]; //error
ninjas = ["mario", "yoshi"];

// union types 联合类型
let mixed: (string | number)[] = [];
mixed.push("hello");
mixed.push(0);

// 单个变量
let uid: string | number;
uid = "123";
uid = 12;
// uid = false; //error

// objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };
ninjaOne = []; //数组是特殊的对象
// ninjaOne = ""; //error

// 明确变量是对象，并指定对象内部属性的类型
let ninjaTwo: {
  name: string;
  age: number;
  beltColor: string;
};

ninjaTwo = {
  name: "mario",
  age: 30,
  beltColor: "blue",
};
