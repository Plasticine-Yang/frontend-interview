/**
 * @description 父类
 */
function Animal(name) {
  // 构造函数传参
  this.name = name;
  // 基础数据类型属性
  this.type = 'animal';
  // 引用类型属性
  this.colors = ['skyblue', 'cyan'];

  // 父类静态方法
  this.say = function () {
    console.log('hi, animal');
  };
}

// 父类实例方法
Animal.prototype.eat = function () {
  console.log('eating...');
};

// ======================================================

/**
 * @description 子类
 */
function Cat(name) {
  // 借用父类构造函数进行初始化
  Animal.call(this, name);
}

// 修改原型链继承的步骤 -- 让子类构造函数的原型指向空对象 空对象的隐式原型指向父类构造函数的原型
function Empty() {}
Empty.prototype = Animal.prototype;
Cat.prototype = new Empty();

// 修正让子类构造函数原型的 constructor
Object.defineProperty(Cat.prototype, 'constructor', {
  value: Cat,
  writable: true,
  enumerable: false,
  configurable: true
});

console.log(Object.getOwnPropertyDescriptors(Cat.prototype)); // 不必要的属性消失了

const cat = new Cat('cat');

// 解决父类构造函数被调用两次 和 子类构造函数中多出了不必要存在的属性的问题
