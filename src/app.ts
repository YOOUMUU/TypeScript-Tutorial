import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

// let docOne: HasFormatter;
// let docTwo: HasFormatter;

// docOne = new Invoice("yoshi", "web work", 250);
// docTwo = new Payment("mario", "plumbing worrk", 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);

// const invOne = new Invoice("mario", "work on the mario website", 250);
// const invTwo = new Invoice("luigi", "work on the luigi website", 300);

// let invoices: Invoice[] = [];
// invoices.push(invOne);
// invoices.push(invTwo);

// invoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;

  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  list.render(doc, type.value, "end");
});

// Generics

const addUID = (obj: object) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc1 = addUID({ name: "yoshi", age: 40 });

console.log(doc1);
// console.log(docOne.name); // error，因为上面没有声明变量会有什么属性，所以ts不知道是否会存在name的属性

// 加入泛型，ts会捕获对象有什么属性
const addUID2 = <T>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc2 = addUID2({ name: "yoshi", age: 40 });
let doc3 = addUID2("hello"); // 但是没有阻止传入不想要的类型

console.log(doc2.name);
console.log(doc3);

// 加入extends关键词来规定传入的类型
const addUID3 = <T extends object>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc4 = addUID3({ name: "yoshi", age: 40 });
// let doc5 = addUID3("hello"); // error，阻止了传入不想要的类型

// 指定传入的对象必须要有name的属性，而且必须是string
const addUID4 = <T extends { name: string }>(obj: T) => {
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let doc6 = addUID4({ name: "yoshi", age: 40 });
// let doc7 = addUID4({ age: 40 }); //errror

// generics with interfaces
interface Resource {
  uid: number;
  resourceName: string;
  data: object; // 想让这个灵活变动，通用
}

const doc7: Resource = {
  uid: 1,
  resourceName: "person",
  data: { name: "shaun" }, // 一定得是对象
};

// data的type会是我们创建这个对象时指定的任何类型
interface Resource2<T> {
  uid: number;
  resourceName: string;
  data: T;
}

const doc8: Resource2<string[]> = {
  uid: 2,
  resourceName: "person",
  data: ["haha", "wuwu"],
};

const doc9: Resource2<object> = {
  uid: 2,
  resourceName: "person",
  data: { name: "shaun" },
};
