/**
 * 浅拷贝对象
 * @param {Object} obj 对象
 */
function shallowClone(obj) {
  if (typeof obj !== 'object') return;

  // 判断是数组对象还是普通对象
  const copiedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 只拷贝对象自身的可枚举属性 不拷贝其隐式原型及原型链上的属性
      copiedObj[key] = obj[key];
    }
  }

  return copiedObj;
}

// 浅拷贝对象
const foo = {
  name: 'plasticine',
  age: 20,
  isMale: true,
  friends: ['Alan', 'Jack', 'Mike'],
  info: {
    hobby: 'coding',
    height: '178cm'
  },
  date: new Date(),
  regExp: /^hello$/,
  say() {
    console.log('hi');
  }
};

const copiedFoo = shallowClone(foo);

// 修改基础数据类型
foo.name = 'foo';
foo.age = 21;

// 修改引用数据类型
foo.friends.push('Steven');
foo.info.weight = '80kg';

// 修改 js 内置对象类型
foo.date.newProp = 'date new prop';
foo.regExp.newProp = 'regExp new prop';

// 修改函数类型
foo.say.hello = 'hello';

console.log(foo);
// {
//   name: 'foo',
//   age: 21,
//   isMale: true,
//   friends: [ 'Alan', 'Jack', 'Mike', 'Steven' ],
//   info: { hobby: 'coding', height: '178cm', weight: '80kg' },
//   date: 2022-05-13T03:00:45.686Z { newProp: 'date new prop' },
//   regExp: /^hello$/ { newProp: 'regExp new prop' },
//   say: [Function: say] { hello: 'hello' }
// }

console.log(copiedFoo);
// {
//   name: 'plasticine',
//   age: 20,
//   isMale: true,
//   friends: [ 'Alan', 'Jack', 'Mike', 'Steven' ],
//   info: { hobby: 'coding', height: '178cm', weight: '80kg' },
//   date: 2022-05-13T03:00:45.686Z { newProp: 'date new prop' },
//   regExp: /^hello$/ { newProp: 'regExp new prop' },
//   say: [Function: say] { hello: 'hello' }
// }

// 浅拷贝数组
const arr = [1, 2, true, '1', '2', { name: 'plasticine' }];
const copiedArr = shallowClone(arr);

// 修改基础数据类型
arr[0] = 666;
arr[1] = 777;
arr[2] = false;
arr[3] = '666';
arr[4] = '777';
// 修改引用数据类型
arr[5].name = 'arr';

console.log(arr); // [ 666, 777, false, '666', '777', { name: 'arr' } ]
console.log(copiedArr); // [ 1, 2, true, '1', '2', { name: 'arr' } ]
