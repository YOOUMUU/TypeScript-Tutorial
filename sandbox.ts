let age: any = 25;

age = true;
age = "hello";
age = {
  name: "luigi",
};

let mixed: any[] = [];
mixed.push(5);
mixed.push("mario");
mixed.push(false);

let ninja: {
  name: any;
  age: any;
};
ninja = { name: "yoshi", age: 25 };
ninja = { name: 25, age: "yoshi" };
