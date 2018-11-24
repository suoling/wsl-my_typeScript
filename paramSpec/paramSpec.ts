// 参数类型
// 在参数名称后面使用冒号来指定参数类型;可以避免错误类型复制，减少开发中的错误，在ts编译器中会提示错误！
var myName : string = 'wang suo ling'
var age : number = 25
var woman : boolean = true
var eatFood : any = 'egg'

function test (name : string, age : number) : void { } // 该方法不需要返回值

//自定义类型
class Person{
    name: string;
    age: number
}

var yaoyaoyuan : Person = new Person()
yaoyaoyuan.name = 'yaoyaoyuan'
yaoyaoyuan.age = 25
// ----------------------------
// 默认参数
var myName : string = 'wang suo ling'
function test11 (a : string, b : string, c = 'yaoyuan') {
    console.log(a)
    console.log(b)
    console.log(c)
}

test11('xxx', 'yyy', 'zzz')
test11('aaa', 'bbb')
// -----------------------------
// 可选参数
function test22 (a : string, b?: string, c = 'yaoyuan') {
    console.log(a)
    console.log(b)
    console.log(c)
}
// 注意：
//  1、要处理可选参数没传的情况.
//  2、必选参数不能放在可选参数后面.
test22('wsl', 'yyy')
test22('wsl')