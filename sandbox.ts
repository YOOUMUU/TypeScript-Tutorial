///////// Arrays
let names = ["luigi", "mario", "yoshi"];

// 变量类型不能变
// names = "hello"; //error

// 我们分配给该数组的类型之后不能更改
// 如果最初的数组只有字符串，后面就只允许加入字符串
names.push("toad");
// names.push(3); //error
// names[0] = 3; //error
// names = [0, 1]; //error

let numbers = [10, 20, 30, 40];

numbers.push(25);
// numbers.push("shaun"); //error
// numbers[0] = "shaun"; //error

// 混合数组可以加入这里面有的类型
let mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3; // 原来的字符串改成数字也ok
// mixed.push(false); //error

////////// Ojects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

// 同样的，object里面的属性也是不能改类型的。从一开始就定好了。
ninja.age = 40;
ninja.name = "ryu";
// ninja.age = "30"; //error

// 也不能加属性
// ninja.skills = ['fighting','sneaking']; //eroor

// 重新赋值对象的时候，也要一样的格式、一样的属性名称，属性不能多也不能少
ninja = {
  name: "yoshi",
  belt: "orange",
  age: 34,
};
