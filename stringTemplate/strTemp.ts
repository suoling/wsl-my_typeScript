// 在传统的JS中，当你想给一个字符串换行的时候需要用"+"
var str1 = 'aaa' +
'bbb' +
'ccc'
console.log(str1)
// 在新的TS中，引用了多行字符串的概念。使用双撇号声明字符串
var str2 = `aaa
bbb
ccc`
console.log(str2)
// 字符串模板
var myName = 'wang suo ling'
var getName = function () {
    return 'wang suo ling'
}
console.log(`<div>
    <div>${myName}</div>
    <div>${getName()}</div>
    <div>XXX</div>
</div>`)
// 自动拆分字符串
function test (template, name, age) {
    console.log(template)
    console.log(name)
    console.log(age)
}

var myName = 'wang suo ling'
var getAge = function () {
    return '25'
}

test `hello, my name is ${myName},and my age is ${getAge()}`
