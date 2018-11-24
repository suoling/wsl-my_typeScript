// export:对外暴露一些资源
export var prop1 = 'prop1'
var prop2
export function fun1 () {
    console.log('fun1')
}
function fun2 () {}
export class AAA {
    constructor (public name: string) {
        this.name = name
        console.log('父极构造器')
    }
}
class BBB {}