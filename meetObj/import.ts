import { prop1, fun1, AAA } from './export'

console.log(prop1)

fun1()

class aaa extends AAA {
    constructor (name : string) {
        super(name)
        console.log(name)
    }
}
var a = new aaa ('a')
