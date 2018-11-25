// Rest and Spread操作符
// 用来声明任意数量的方法参数
function fn (...args) {
    args.forEach(item => {
        console.log(item)
    })
}

fn(1, 2, 3, 4)
fn(1, 2, 3, 4, 5, 6, 7, 8)
// ---------------------------

// 可以把任意长度的数组转换成一个固定数量参数的方法的调用
// 因为ts是es6语法的扩展，但是下边的这个例子，es6语法支持，当前版本的ts不支持
// function fun1(a, b, c){
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// var args = [1,2];
// fun1(...args);
// var args2 = [7, 8, 9, 10, 11];
// fun1(...args2);
// -----------------------------------

// generator函数
// 控制函数的执行过程，手工暂停和恢复代码执行
// 下边的这个例子，es6语法支持，当前版本的ts不支持
// function* doSomething () {
//     console.log('start')
//     yield
//     console.log('end')
// }

// var fun1 = doSomething()
// fun1.next() // generator函数调用时，要声明一个变量,并且执行一次next()方法，不然函数调用不会执行
//             // 每执行一个next() 就停在一个yield中，相当于断点
// fun1.next() // 再次执行next(),就会从上次暂停的地方一直执行到下一个有yield的地方zuihou，
//             // 如果之后不存在yield，则会一直执行到函数最后

// function* getStockPrice (stock) {
//     while (true) {
//         yield Math.random() * 100
//     }
// }

// var priceGenerator = getStockPrice('IBM')
// var limitPrice = 14
// var price = 100
// while (price > limitPrice) {
//     price = priceGenerator.next().value
//     console.log(`the generator return ${price}`)
// }
// // 当while循环条件不满足时，就暂停跳出；
// console.log(`buying at ${price}`)
// ------------------------------------

// destructuring析构表达式
// 通过表达式将对象或数组拆解成任意数量的变量
function getPerson () {
    return {
        xingMing: 'wsl',
        age: 25,
        eat: {
            food: 'egg',
            drink: 'water'
        }
    }
}
// var person = getPerson()
// var xingMing = person.xingMing
// var eat = person.eat
// // 上面三行是es5写法，将个人的信息存到本地变量person中；
// console.log(xingMing)
// console.log(eat)
var { xingMing: myname, eat: {food} } = getPerson()
console.log(myname)
console.log(food)

var arr = [1, 2, 3, 4]
var [, , num1, num2] = arr
var [num3, num4, ...other] = arr

console.log(num1)  
console.log(num2)
console.log(num3)
console.log(num4)
console.log(other)

function getNum ([num3, num4, ...other]) {
    console.log(num3)
    console.log(num4)
    console.log(other)
}

// getNum(arr)  //此处我在本地测试时报错，但是在ts官方上运行时不报错
// 总结：当你需要从一个对象的属性或者是数组的元素里面，用它们的值去初始化一个变量的时候，析构表达式可以让你写更少的代码。

