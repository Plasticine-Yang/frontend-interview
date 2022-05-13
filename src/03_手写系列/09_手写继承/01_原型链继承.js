/**
 * @description 父类
 */
function Animal() {
  // 基础数据类型属性
  this.type = 'animal';
  // 引用类型属性
  this.colors = ['skyblue', 'cyan'];
  // 函数类型属性
  this.say = function () {
    console.log('hi, animal');
  };
}

// ======================================================

/**
 * @description 子类
 */
function Cat() {}

// 原型链继承的关键 -- 让子类构造函数的原型指向父类对象
Cat.prototype = new Animal();

const cat = new Cat();
const otherCat = new Cat();

cat.type = 'cat';
cat.colors.push('orange');
cat.say.hello = function () {
  console.log('hello');
};

console.log(otherCat.type); // animal
console.log(otherCat.colors); // [ 'skyblue', 'cyan', 'orange' ]
otherCat.say.hello(); // hello

// new Cat() 时会浅拷贝父类对象的属性 导致引用类型的属性会被子类对象共享
// new Cat() 的时候不能给父类构造函数传参
