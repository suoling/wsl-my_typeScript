// 面向对象特性
// ----------------------------

// TypeScript类（Class）
// 类是TS的核心，使用TS开发时，大部分代码都是写中类里面的。
// 这里会介绍类的定义、构造函数、以及类的继承
class People{
    // 类的构造函数，只在实例化时被调用，而且被调用一次；
    constructor (public name : string) {
        this.name = name
        console.log('父极构造器')
    }
    eat () {
        console.log('I"m eating')
    }
}
// 子类拥有父类的属性和方法,还可以自定义自己属性和方法
class Teacher extends People{
    code : string
    constructor (name: string, code: string) {
        super(name) // 子类构造函数必选调用父类构造函数
        console.log('子类构造器')
        this.code = code
    }
    work () {
        super.eat() // 调用父类方法
        this.doWork()
    }
    private doWork () {
        console.log('I"m working')
    }
}
// 类的实例化
var worker = new Teacher ('suoling', '25')
worker.work()
var p1 = new People ('yaoyuan')
p1.eat()
var p2 = new People ('suoling')
p2.eat()
// 类的访问控制符： private:只能中类内部访问 public:类的外部和内部都可以访问 protected:类内部和子类可以访问
// -------------------------------

// TypeScript泛型（generic）
// 参数化的类型，一般用来限制集合的内容
// 声明一个数组
var workers : Array<People> = []  // //指定数组只能放Person类型的元素
workers[0] = new People('wsl')
workers[1] = new People('yyy')
// -------------------------------

// TypeScript接口（Interface）
// 用来建立某种代码约定，使得其它开发者在调用某个方法或创建新的类时必须遵循接口所定义的代码约定。

// 声明接口
interface Iperson {
    name: string
    age: number
}

class Preson {
    //接口作为方法的参数的类型声明
    constructor (public config : Iperson) {

    }
}

var person11 = new Preson ({
    name: 'wsl',
    age: 25  //  传入的参数必须满足接口声明的参数的所有属性
}) 

// 接口声明方法
interface Animal {
    eat ()
}
//实现接口的类必须要实现接口中的方法；
class Dog implements Animal {
    eat () {
        console.log('I"m eating gutou')
    }
}
class Sheet implements Animal {
    eat () {
        console.log('I"m eating grass')
    }
}
// ----------------------------------

// TypeScript模块（Module）
// 模块可以帮助开发者将代码分割为可重用的单元。开发者可以自己决定将模块中的哪些资源（类、方法、变量）
// 暴露出去供外部使用，哪些资源只在模块内使用。 在TS中一个文件就是一个模块，
// 模块的内部有两个关键字（export、import）支撑模块的特性。 
// 这两个关键字来控制模块 对外暴露什么、需要别的模块对你提供什么
// demo见 export.ts 和 import.ts

// ------------------------------------

// TypeScript注解（annotation）
// 注解为程序的元素（类、方法、变量）加上更直观的说明，这些说明信息与程序的业务逻辑无关，而上供指定的工具框架使用的。
