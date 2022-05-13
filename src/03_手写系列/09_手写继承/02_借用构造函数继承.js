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
  // 函数类型属性
  this.say = function () {
    console.log('hi, animal');
  };

  // 想要让子类继承的方法只能放在构造函数内 -- 相当于 es6 class 的静态方法
  this.run = function () {
    console.log('running...');
  };
}

// 写在原型上的方法无法被继承
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

const cat = new Cat('cat');
const otherCat = new Cat('otherCat');

// 弊端 -- 定义在父类构造函数原型上的方法无法被继承
cat.run(); // running...
cat.eat(); // TypeError: cat.eat is not a function

cat.colors.push('orange');
cat.say.hello = function () {
  console.log('hello');
};

console.log(otherCat.colors); // [ 'skyblue', 'cyan' ]
otherCat.say.hello(); // TypeError: otherCat.say.hello is not a function

// 解决了原型链继承中的 -- 子类共享父类中的引用类型属性 和 子类构造函数无法传参的问题
// 但是出现了想要让子类继承的方法只能定义在父类构造函数中的限制
