const anchor = document.querySelector("a");

console.log(anchor);
// console.log(anchor.href); // ts不知道anchor是不是null，所以type不确定，会有error

// 方法一：加上if
if (anchor) {
  console.log(anchor.href);
}

// 方法二：在queryselector后面加感叹号(告诉ts这个我知道它存在肯定不是null)
const anchor2 = document.querySelector("a")!;
console.log(anchor2.href);
// ts知道这个变量是HTMLAnchorElement，所以鼠标悬停会有提示，可以自动匹配对应的method

// const form = document.querySelector("form")!;
const form = document.querySelector(".new-item-form") as HTMLFormElement;
// 如果用class等进行选择，ts会不知道这是个什么特殊元素，所以要告诉它，然后用as就不用感叹号了，因为知道有东西不会是null
// console.log(form.children);

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber); //valueAsNumber让input的值的类型变成number
});
