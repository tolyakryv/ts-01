const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
  return num1 + num2;
}

button?.addEventListener("click", function() {
  console.log(add(+input1.value, +input2.value));
});
let age:number = 50;
let names: string = 'Max';
let toggle:boolean = true;
let empty:null
  empty= null;
let notInitialize: undefined = undefined;
let callback: (param: number) => number 
callback = (a: number) => { return 100 + a };
 
// -----------------
let anything:any
  anything = -20;
anything = 'Text';
anything = {};

let some:string;
some = 'Text';
let str: string;
str = some;

let person:[string, number]
person = ['Max', 21];
  
enum StatusLoad { LOADING, READY };

const page = {
 load: StatusLoad.READY
}
if (page.load === StatusLoad.READY) {
  console.log("завантажено")
}
if (page.load === StatusLoad.LOADING) {
  console.log('завантажується')
}
let stringOrNumber: string | number
stringOrNumber = "num"

let arbait: 'enable' | 'disable'
arbait = 'enable'

function showMessage(message:string):void {
  console.log(message);
}


function calc(num1:number, num2:number):number {
  return num1 + num2;
}

function customError():never {
  throw new Error('Error');
}

// -------------------!SECTION
type pageType= {
  title: string,
  likes: number,
  accounts: string[],
  status: 'open' | 'close',
  details?: {
    createAt: string,
    updateAt:string
  }
}
const page1:pageType = {
  title: 'The awesome page',
  likes: 100,
  accounts: ['Max', 'Anton', 'Nikita'],
  status: 'open',
  details: {
    createAt: '2021-01-01',
    updateAt: '2021-05-01',
  }
}

const page2:pageType = {
  title: 'Python or Js',
  likes: 5,
  accounts: ['Alex'],
  status: 'close',
}