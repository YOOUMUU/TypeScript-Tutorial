// classes
class Invoice {
  // 定义这个class存在的、不同值的类型
  client: string;
  details: string;
  amount: number;

  // 用constructor初始化这些值
  constructor(c: string, d: string, a: number) {
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

let invoices: Invoice[] = []; // 只有用了Invoice class创建的对象才能加进这个数组
// invoices.push('hello') //error
invoices.push(invOne);
invoices.push(invTwo);

console.log(invoices);

// 默认情况下创建的class的属性都是可以更改的：
invOne.client = "yoshi";
invTwo.amount = 400;

console.log(invOne, invTwo);

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
