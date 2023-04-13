// 在typescript中定义了变量之后，它的类型就不会被改变了。不用指定类型，typescript会自己推理给的值是什么类型
var character = "luigi";
var age = 30; // Number，也不区分整数或者浮点数之类
var isBlackBelt = false;
// 字符串同样可以使用双引号或者单引号
// character = 20;  // error
character = "mario"; // 字符串只能改成字符串，其他类型同理
// 在编译过程中检查类型是否正确，而不是执行才发现类型不对
// const circ = (diameter) => {
//   return diameter * Math.PI;
// };
// console.log(circ("hello"));
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
