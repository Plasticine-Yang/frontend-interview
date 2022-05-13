class Animal {
  constructor(name) {
    this.name = name;
    this.type = 'animal';
    this.colors = ['skyblue', 'cyan'];
  }

  // 静态方法
  static say() {
    console.log('hi, animal');
  }

  // 实例方法
  eat() {
    console.log('eating...');
  }
}

class Cat extends Animal {}

const cat = new Cat('cat');

console.log(cat);

Cat.say(); // hi, animal
cat.eat(); // eating...
