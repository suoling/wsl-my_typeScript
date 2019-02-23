## 知识点

### TypeScript介绍

- TypeScript 扩展了JavaScript语法，大部分已经存在的JavaScript程序，可以不加任何改动，在TypeScript环境下运行。
- TypeScript只是向JavaScript添加了一些新的遵循ES6规范的语法，以及基于类的面向对象编程的这种特性
- 其次，2016年9月底发布的Angular2框架，这个框架本身是由TypeScript编写的。Angular框架，大家都知道，它是由谷歌公司开发的，非常流行的框架。也就是说，现在TS这门语言是由微软和谷歌这两大公司在背后支持。因此我们有理由相信，在未来一段时间内，TS有可能成为前端开发语言中的主流
- 微软开发的一门编程语言
- JavaScript的超集（扩展了js的语法，以及基于类的面向对象编程的特性）
- 遵循最新的ES6规范

### TypeScrip优势

- 支持ES6规范：2015年发布的，它指出了未来一段时间内，客户端脚本语言的发展方向
- 强大的IDE支持：体现在三个特性上：
    - 1.类型检查，在TS中允许你为变量指定类型
    - 2.语法提示<提高开发效率>
    - 3.重构<提高开发效率和代码质量>
- Angular2的开发语言

### 搭建TypeScript开发环境

其实也就安装TypeScript的compiler

### 什么是compiler? 为什么需要compiler?

- compiler(编译器)的作用是把TS代码转换成JS代码
- ES6规范是在2015年发布的，而目前所有主流的浏览器并没有完全支持ES6规范，所以用ES6写的东西并不能直接放在浏览器中去跑
- TS语法编译成JS语法的命令是：
```shell
tsc 文件名.ts
```
- 直接运行TS代码，需要安装ts-node依赖,然后运行TS文件即可，相关命令如下：
```shell
npm install -g ts-node
ts-node 文件名.ts
```
### 使用在线compiler开发

[官网](http://www.typescriptlang.org/)点击[Playground](http://www.typescriptlang.org/play/index.html)

#### 安装：

```shell
npm install -g typescript
tsc -v
Version 3.1.3
```

#### 使用：

在hello文件目录下新建hello.ts文件
```js
export class Hello {

}
```
运行`tsc hello.ts`命令，可以看到在hello文件夹下生成了一个hello.js文件，即编译后最终在浏览器中执行的文件
```js
"use strict";
exports.__esModule = true;
var Hello = /** @class */ (function () {
    function Hello() {
    }
    return Hello;
}());
exports.Hello = Hello;
```

### 字符串新特性

#### 多行字符串

在传统的JS中，当你想给一个字符串换行的时候需要用"+"
```js
var content = "aaa"+
"bbb"+
"ccc";
```
在新的TS中，引用了多行字符串的概念。使用`双撇号`声明字符串
```js
var content = `aaa
bbb
ccc`;
```
编译成JS会自动加上换行
```js
var content = "aaa\nbbb\nccc"
```

#### 字符串模板

```js
var myname = "yu fei yu";
var getName = function(){
    return "yu fei yu";
}
console.log(`<div>
<span>${myname}</span>
<span>${getName()}</span>
<div>xxx</div>
</div>`);
```

#### 自动拆分字符串

```js
function test(template, name, age){
    console.log(template);
    console.log(name);
    console.log(age);
}
var myname = "yu fei yu";
var getAge = function(){
     return 18;
}
//用字符串模板调用test方法，在字符串模板中，表达式的值会传入到相应的参数中；

test `hello my name is ${myname},i'm ${getAge()}`
```
控制台输出：
```js
// Array[3]
//     0: "hello my name is "
//     1: ",i'm "
//     2: "
// yu fei yu
// 18
```

### 参数新特性

#### 参数类型

在参数名称后面使用冒号来指定参数类型;可以避免错误类型赋值，减少开发中的错误，在ts编译器中会提示错误！
```js
var myname: string = "yue fei yu";
var alias: any = "lulu";  // 可以为变量赋任何类型值
var age: number = 13;
var man: boolean = true;
function test(name:string): void {}  // 该方法不需要返回值
 //自定义类型
class Person{
    name: string;
    age: number;
}
var wangwu: Person = new Person();
wangwu.name = "wangwu";
wangwu.age = 18;
```

#### 参数默认值

在参数声明后面用等号来指定参数默认值
```js
var myname:string = "yu fei"

//带默认值的参数要声明在最后；
function test(a:string, b:string, c:"lulu"){
    console.log(a);
    console.log(b);
    console.log(c);
}
test("xxx", "yyy", "zzz");
test("xxx", "yyy");
```

#### 可选参数

在方法的参数声明后面用问号来标明此参数为可选参数
```js
function test(a:string, b?:string, c:"lulu"){
    console.log(a);
    console.log(b);
    console.log(c);
}
//注意：1、要处理可选参数没传的情况。2、必选参数不能放在可选参数后面。
test("xxx");
```

### 函数新特性

#### Rest and Spread操作符

#### 用来声明任意数量的方法参数

```js
function fun1(...args){
    args.forEach(function(arg){
        console.log(arg);
    })
}
fun1(1, 2, 3);
fun1(7, 8, 9, 10, 11, 12);
// "..."即Rest and Spread操作符
```

#### 可以把任意长度的数组转换成一个固定数量参数的方法的调用

```js
// 因为ts是es6语法的扩展，但是下边的这个例子，es6语法支持，当前版本的ts不支持
function fun1(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
}
var args = [1,2];
fun1(...args);
var args2 = [7, 8, 9, 10, 11];
fun1(...args2);
```

#### generator函数

- 控制函数的执行过程，手工暂停和恢复代码执行
```js
// 下边的这个例子，es6语法支持，当前版本的ts不支持
function* doSomething () {
    console.log('start')
    yield
    console.log('end')
}

var fun1 = doSomething()
fun1.next() // generator函数调用时，要声明一个变量,并且执行一次next()方法，不然函数调用不会执行
            // 每执行一个next() 就停在一个yield中，相当于断点
fun1.next() // 再次执行next(),就会从上次暂停的地方一直执行到下一个有yield的地方，
            // 如果之后不存在yield，则会一直执行到函数最后

function* getStockPrice (stock) {
    while (true) {
        yield Math.random() * 100
    }
}

var priceGenerator = getStockPrice('IBM')
var limitPrice = 14
var price = 100
while (price > limitPrice) {
    price = priceGenerator.next().value
    console.log(`the generator return ${price}`)
}
// 当while循环条件不满足时，就暂停跳出；
console.log(`buying at ${price}`)
```

#### destructuring析构表达式

- 通过表达式将对象或数组拆解成任意数量的变量
```js
function getStock(){
    return{
        code:"LU",
        price:{
            price1:100,
            price2:200
        }，
        aaa:"xixi",
        bbb: "haha"
    }
}
//var stock = getStock();
//var code = stock.code;
//var price =stock.price;

// 上面三行是es5写法，将股票的信息存到本地变量stock中；

var {code: codex, price: {price2}} = getStock();
    //对象中的属性被转换成两个本地的变量codex,price;
    // 相当于 var codex = getStock().code
    // 还有 var price2 = getStock().price.price2
console.log(codex); // LU
console.log(price2); //200
```

```js
var array1 = [1,2,3,4];
var [, , number1, mumber2] = array1;
var [number3, mumber4, ...others] = array1;

console.log(number1); //3
console.log(number2); //4
console.log(number3); //1
console.log(number4); //2
console.log(others);  //[3,4]

var doSomething([number3, mumber4, ...others]){
    console.log(number3);
    console.log(number4);
    console.log(others);
}

doSomething(array1);  //1 2  [3,4]  此处我在本地测试时报错，但是在ts官方上运行时不报错
```
- 总结：当你需要从一个对象的属性或者是数组的元素里面，用它们的值去初始化一个变量的时候，析构表达式可以让你写更少的代码。

### 表达式和循环

#### 箭头表达式

- 用来声明匿名函数，消除传统匿名函数的this指针问题
```js
var sum = (arg1, arg2) => {
    return arg1 + arg2;
}
```

```js
var myArray = [1,2,3,4,5];
console.log(myArray.filter(value =>value%2 === 0 ));  //[2,4]
```

```js
function getStock(name:string){
    this.name  = name;

    setInterval(function(){
        conlose.log("name is :" + this.name);
    },1000);
}

var stock = new getStock("LU"); //name is:
```

```js
function getStock2(name:string){
    this.name  = name;

    setInterval(() =>{
        conlose.log("name is :" + this.name);
    },1000);
}

var stock = new getStock2("LU"); //name is:LU
```

#### forEach(), for in 和for of
```js
var myArray = [1,2,3,4];
myArray.desc = "four number";  // es5语法支持给数组添加属性，但是ts不支持

myArray.forEach(value => console.log(value));//1 2 3 4
//不能break  遍历循环数组中的元素，而把添加的属性过滤掉


for(var n in myArray){
    console.log(n);  //0 1 2 3 4  -- 属性名(键名)
                     // es5语法中打印出来的是 0, 1, 2, 3, 4, desc
    console.log(myArray[n]);  // 1 2 3 4   -- 键值
                              // es5语法中打印出来的是 0, 1, 2, 3, 4, desc
}

for(var n of myArray){
    if（n >2）break;
    console.log(n);  // 1 2
}//可以break,可以用值任何对象上。

for(var n of "four number"){
    console.log(n);   // f o u r  n u m b e r;把每个字符打印出来
                      // 此处我在本地测试时报错，但是在ts官方上运行时不报错
}
```

### 面向对象特性

#### TypeScript类（Class）

- 类是TS的核心，使用TS开发时，大部分代码都是写中类里面的。
- 这里会介绍类的定义、构造函数、以及类的继承
```js
//类的声明
class Person{

    constructor(public name:string){
        this.name = name;
        consloe.log("haha"):
    }// 类的构造函数，只在实例化时被调用，而且被调用一次；

    eat(){
        console.log("im eating");
    }
}

//子类拥有父类的属性和方法,还可以自定义自己属性和方法
class Emplyee extends Person{
    code: string:
    constructor(name: string, code: string){
        super(name); // 子类构造函数必选调用父类构造函数
        consloe.log("xixi"):
        this.code = code;
    }

    work(){
        super.eat(); // 调用父类方法
        this.doWork();
    }
    private doWork(){
        console.log("im working");
    }
}

//类的实例化
var e1 = new Employee("name", "1");
e1.work();

var p1 = new Person("batman");
p1.eat();

var p2 = new Person("superman");
p2.eat();
```
`类的访问控制符：`
- private:只能中类内部访问
- public:类的外部和内部都可以访问
- protected:类内部和子类可以访问

#### TypeScript泛型（generic）

- 参数化的类型，一般用来限制集合的内容
继续上面的例子
声明一个数组
```js
var workers: Array<Person> = []; // 指定数组只能放Person类型的元素

workers[0] = new Person("zhangsan");
workers[1] = new Employee("lisi", "2");
```

#### TypeScript接口（Interface）

- 用来建立某种代码约定，使得其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定。
- 接口声明属性

```js
//声明接口
interface IPerson{
    name: string;
    age: number;

}
//声明类
class Person{
    // 接口作为方法的参数的类型声明
    constructor(public config: IPerson){

    }
}

var p1 = new Person({
    name: "zhangsan",
    age: 18
})// 传入的参数必须满足接口声明的参数的所有属性
```

- 接口声明方法

```js
interface Animal {
    eat(){

    }
}

// 实现接口的类必须要实现接口中的方法；
class Sheep implements Animal{
    eat(){
        console.log("im eat grass");
    }
}

class Tiger implements Animal{
    eat(){
        console.log("im eat meat");
    }
}
```

#### TypeScript模块（Module）

- 模块可以帮助开发者将代码分割为可重用的单元。开发者可以自己决定将模块中的哪些资源（类、方法、变量）暴露出去供外部使用，哪些资源只在模块内使用。
- 在TS中一个文件就是一个模块，模块的内部有两个关键字（export、import）支撑模块的特性。
- 这两个关键字来控制模块 对外暴露什么、需要别的模块对你提供什么

export:对外暴露一些资源
```js
//a.ts
export var prop1;

var prop2;

export function fun1(){

}
function fun2(){

}

export class Clazz1{

}

class Clazz2{

}
```

```js
//b.ts
import {prop1, fun1, Clazz2}from "./a";

console.log(prop1);
fun1();
new Clazz1();

export function fun3{

}
```

#### TypeScript注解（annotation）

- 注解为程序的元素（类、方法、变量）加上更直观的说明，这些说明信息与程序的业务逻辑无关，而是供指定的工具框架使用的。
```js
//app.component.ts
import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./component.css']
})

export class AppComponent{
    title = 'app works';
}
```

```js
//app.component.html

`<h1>
{{title}} //绑定在AppComponent 类的title 属性上
</h1>`
```
- 上面程序使用angular2 框架写的程序，在`app.component.ts`文件中声明类一个类`AppComponent`，在这个类上有一个注解`@Component`，这个注解本身是由angular2框架提供的，在这个注解中有一些属性，这个注解的这些属性会告诉angulr2 框架怎么去处理`AppComponent`这个ts类。即 在angular2 框架中，去实例化一个AppComponent这样一个类的时候，angular2框架会去加载`./app.component.html`这个页面，和`./component.css`展示中页面中；
- 这就是注解，它用来告诉一个框架怎么处理程序中的元素（类、元素等）

#### TypeScript类型定义文件（.d.ts）

类型定义文件用来帮助开发者在TypeScript中使用已有的JavaScript的工具包

如： JQuery

目录下引入jquery的类型定义文件即可: `index.d.ts`
```js
//a.ts

export var prop1;

var prop2;

export function fun1(){

}
function fun2(){
    $('xxxx').hide();
}

export class Clazz1{

}

class Clazz2{

}
```

```js
//b.ts
import {prop1, fun1, Clazz2}from "./a";

console.log(prop1);
fun1();
new Clazz1();

export function fun3{

}
```

#### 怎么找类型定义文件？

[Typings工具](https://github.com/typings/typings)

这个工具上用来专门安装类型定义文件的。

### 总结

- 介绍了TypeScript的基本概念和优势
- 介绍了如何搭建TypeScript 开发环境
- 介绍了TypeScript的语法和特性
