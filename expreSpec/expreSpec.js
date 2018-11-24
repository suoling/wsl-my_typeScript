// 箭头表达式
// 用来声明匿名函数，消除传统匿名函数的this指针问题
var sum = function (num1, num2) { return num1 + num2; };
// var sum = (num1, num2) => {
//     console.log(num1, num2)
//     return num1 + num2
// }
var arr = [1, 2, 3, 4, 5];
var filterArr = arr.filter(function (item) {
    return item % 2 === 0;
});
console.log(filterArr);
function getPeople(name) {
    this.name = name;
    setTimeout(function () {
        console.log("my name is " + this.name);
    }, 1000);
}
var peopleName = new getPeople('wsl');
function getPeople2(name) {
    var _this = this;
    this.name = name;
    setTimeout(function () {
        console.log("my name is " + _this.name);
    }, 1000);
}
var peopleName = new getPeople2('wsl');
// -------------------------------
// 表达式和循环
// forEach、for in、 for of
var numArr = [1, 2, 3, 4, 5];
// numArr.desc = 'five number'  // es5语法支持给数组添加属性，但是ts不支持
// forEach()不能break
// forEach()遍历循环数组中的元素，而把添加的属性过滤掉
numArr.forEach(function (item) {
    console.log(item); // 1, 2 ,3 ,4 ,5
});
for (var n in numArr) {
    console.log(n); // 0, 1, 2, 3, 4   -- 属性，键名,
    // es5语法中打印出来的是 0, 1, 2, 3, 4, desc
    console.log(numArr[n]);
}
// for of 可以break, 可以用在任何对象上
for (var _i = 0, numArr_1 = numArr; _i < numArr_1.length; _i++) {
    var m = numArr_1[_i];
    if (m > 2)
        break;
    console.log(m);
}
// for (var x of 'wangsuoling') {
//     console.log(x) // 本地执行会报错，但是ts官网上运行不报错
// }
