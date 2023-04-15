// 自动赋类型为function
let great = () => {
  console.log("hello, world");
};

// great = "hello"; //error

let great2: Function; // F要大写

great2 = () => {
  console.log("hello,world");
};

// 设置可选参数
const add = (a: number, b: number, c?: number | string) => {
  console.log(a + b);
  console.log(c); //undefined
};

// 设置参数默认值
const add2 = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  console.log(c);
};

add(5, 10);
add(5, 10, "10");

// return 会自动推断并设置返回值的类型，上面没有return的function会自动返回void（空）
const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(10, 7);
// result = ""; //error
