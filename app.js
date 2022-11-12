var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
var age = 50;
var names = 'Max';
var toggle = true;
var empty;
empty = null;
var notInitialize = undefined;
var callback;
callback = function (a) { return 100 + a; };
// -----------------
var anything;
anything = -20;
anything = 'Text';
anything = {};
var some;
some = 'Text';
var str;
str = some;
var person;
person = ['Max', 21];
var StatusLoad;
(function (StatusLoad) {
    StatusLoad[StatusLoad["LOADING"] = 0] = "LOADING";
    StatusLoad[StatusLoad["READY"] = 1] = "READY";
})(StatusLoad || (StatusLoad = {}));
;
var page = {
    load: StatusLoad.READY
};
if (page.load === StatusLoad.READY) {
    console.log("завантажено");
}
if (page.load === StatusLoad.LOADING) {
    console.log('завантажується');
}
var stringOrNumber;
stringOrNumber = "num";
var arbait;
arbait = 'enable';
function showMessage(message) {
    console.log(message);
}
function calc(num1, num2) {
    return num1 + num2;
}
function customError() {
    throw new Error('Error');
}
var page1 = {
    title: 'The awesome page',
    likes: 100,
    accounts: ['Max', 'Anton', 'Nikita'],
    status: 'open',
    details: {
        createAt: '2021-01-01',
        updateAt: '2021-05-01'
    }
};
var page2 = {
    title: 'Python or Js',
    likes: 5,
    accounts: ['Alex'],
    status: 'close'
};
