// 面向对象特性
// ----------------------------
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// TypeScript类（Class）
// 类是TS的核心，使用TS开发时，大部分代码都是写中类里面的。
// 这里会介绍类的定义、构造函数、以及类的继承
var People = /** @class */ (function () {
    // 类的构造函数，只在实例化时被调用，而且被调用一次；
    function People(name) {
        this.name = name;
        this.name = name;
        console.log('父极构造器');
    }
    People.prototype.eat = function () {
        console.log('I"m eating');
    };
    return People;
}());
// 子类拥有父类的属性和方法,还可以自定义自己属性和方法
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, code) {
        var _this = _super.call(this, name) // 子类构造函数必选调用父类构造函数
         || this;
        console.log('子类构造器');
        _this.code = code;
        return _this;
    }
    Teacher.prototype.work = function () {
        _super.prototype.eat.call(this); // 调用父类方法
        this.doWork();
    };
    Teacher.prototype.doWork = function () {
        console.log('I"m working');
    };
    return Teacher;
}(People));
// 类的实例化
var worker = new Teacher('suoling', '25');
worker.work();
var p1 = new People('yaoyuan');
p1.eat();
var p2 = new People('suoling');
p2.eat();
// 类的访问控制符： private:只能中类内部访问 public:类的外部和内部都可以访问 protected:类内部和子类可以访问
// -------------------------------
// TypeScript泛型（generic）
// 参数化的类型，一般用来限制集合的内容
// 声明一个数组
var workers = []; // //指定数组只能放Person类型的元素
workers[0] = new People('wsl');
workers[1] = new People('yyy');
