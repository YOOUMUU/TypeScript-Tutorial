import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
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
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
// list template instance
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, "end");
});
// Generics
const addUID = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc1 = addUID({ name: "yoshi", age: 40 });
console.log(doc1);
// console.log(docOne.name); // error，因为上面没有声明变量会有什么属性，所以ts不知道是否会存在name的属性
// 加入泛型，ts会捕获对象有什么属性
const addUID2 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc2 = addUID2({ name: "yoshi", age: 40 });
let doc3 = addUID2("hello"); // 但是没有阻止传入不想要的类型
console.log(doc2.name);
console.log(doc3);
// 加入extends关键词来规定传入的类型
const addUID3 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc4 = addUID3({ name: "yoshi", age: 40 });
// let doc5 = addUID3("hello"); // error，阻止了传入不想要的类型
// 指定传入的对象必须要有name的属性，而且必须是string
const addUID4 = (obj) => {
    let uid = Math.floor(Math.random() * 100);
    return Object.assign(Object.assign({}, obj), { uid });
};
let doc6 = addUID4({ name: "yoshi", age: 40 });
const doc7 = {
    uid: 1,
    resourceName: "person",
    data: { name: "shaun" }, // 一定得是对象
};
const doc8 = {
    uid: 2,
    resourceName: "person",
    data: ["haha", "wuwu"],
};
const doc9 = {
    uid: 2,
    resourceName: "person",
    data: { name: "shaun" },
};
