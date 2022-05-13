/**
 * 让 child 继承自 parent
 * @param {Function} child 子类构造函数
 * @param {Function} parent 父类构造函数
 * @returns void
 */
function inherit(child, parent) {
  function Empty() {}
  Empty.prototype = parent.prototype;
  child.prototype = new Empty();

  // 修正子类构造函数 prototype 的 contructor
  Object.defineProperty(child.prototype, 'constructor', {
    value: child,
    writable: true,
    enumerable: false,
    configurable: true
  });
}

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

// 调用封装好的继承函数实现 Cat 继承自 Animal
inherit(Cat, Animal);

console.log(Object.getOwnPropertyDescriptors(Cat.prototype)); // 不必要的属性消失了

const cat = new Cat('cat');
console.log(cat); // 继承了父类的所有属性

cat.say(); // 继承了父类的静态方法
cat.eat(); // 继承了父类的实例方法
