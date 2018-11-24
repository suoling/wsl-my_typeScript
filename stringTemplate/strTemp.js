var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
// 在传统的JS中，当你想给一个字符串换行的时候需要用"+"
var str1 = 'aaa' +
    'bbb' +
    'ccc';
console.log(str1);
// 在新的TS中，引用了多行字符串的概念。使用双撇号声明字符串
var str2 = "aaa\nbbb\nccc";
console.log(str2);
// 字符串模板
var myName = 'wang suo ling';
var getName = function () {
    return 'wang suo ling';
};
console.log("<div>\n    <div>" + myName + "</div>\n    <div>" + getName() + "</div>\n    <div>XXX</div>\n</div>");
// 自动拆分字符串
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = 'wang suo ling';
var getAge = function () {
    return '25';
};
test(__makeTemplateObject(["hello, my name is ", ",and my age is ", ""], ["hello, my name is ", ",and my age is ", ""]), myName, getAge());
