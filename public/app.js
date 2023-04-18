"use strict";
// classes
class Invoice {
    // 用constructor初始化这些值
    constructor(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);
let invoices = []; // 只有用了Invoice class创建的对象才能加进这个数组
// invoices.push('hello') //error
invoices.push(invOne);
invoices.push(invTwo);
console.log(invoices);
// 默认情况下创建的class的属性都是可以更改的：
invOne.client = "yoshi";
invTwo.amount = 400;
console.log(invOne, invTwo);
const form = document.querySelector(".new-item-form");
// inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
