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

// 原型链继承的关键 -- 让子类构造函数的原型指向父类对象
Cat.prototype = new Animal();
// 修正让子类构造函数原型的 constructor
Object.defineProperty(Cat.prototype, 'constructor', {
  value: Cat,
  writable: true,
  enumerable: false,
  configurable: true
});

console.log(Object.getOwnPropertyDescriptors(Cat.prototype)); // 多出了不必要存在的属性
// 子类构造函数中不应当有 name、type、colors、say 这几个属性 因为子类构造函数中并没有定义它们

const cat = new Cat('cat');

// 继承了父类的静态方法
cat.say(); // hi, animal
// 继承了父类的实例方法
cat.eat(); // eating...

// 解除了借用构造函数继承中限制 子类既可以继承父类的实例方法 又可以继承父类的静态方法
