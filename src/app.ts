// interfaces
interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}
// 不用来创造object，只是拿来规范object的结构

const me: IsPerson = {
  name: "shuan",
  age: 30,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number) {
    console.log("I spent", amount);
    return amount;
  },
};

let someone: IsPerson; // 未来的值要符合IsPerson的结构

// interface确保了这个对象的未来的属性
const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

import { Invoice } from "./classes/Invoice.js";

const invOne = new Invoice("mario", "work on the mario website", 250);
const invTwo = new Invoice("luigi", "work on the luigi website", 300);

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);

invoices.forEach((inv) => {
  console.log(inv.client, inv.amount, inv.format());
});

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
