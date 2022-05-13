/**
 * @description 简易版深拷贝 -- 不考虑 js 内置对象和函数 以及 循环引用
 * @param {Object} obj 对象
 */
function deepCloneSimple(obj) {
  if (typeof obj !== 'object') return obj;

  const copiedObj = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      copiedObj[key] = deepCloneSimple(obj[key]);
    }
  }

  return copiedObj;
}

// 测试简易版深拷贝

// 深拷贝对象
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

const copiedFoo = deepCloneSimple(foo);

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
//   date: 2022-05-13T03:06:05.109Z { newProp: 'date new prop' },
//   regExp: /^hello$/ { newProp: 'regExp new prop' },
//   say: [Function: say] { hello: 'hello' }
// }

console.log(copiedFoo);
// {
//   name: 'plasticine',
//   age: 20,
//   isMale: true,
//   friends: [ 'Alan', 'Jack', 'Mike' ],
//   info: { hobby: 'coding', height: '178cm' },
//   date: {},
//   regExp: {},
//   say: [Function: say] { hello: 'hello' }
// }

// 深拷贝数组
const arr = [1, 2, true, '1', '2', { name: 'plasticine' }];
const copiedArr = deepCloneSimple(arr);

// 修改基础数据类型
arr[0] = 666;
arr[1] = 777;
arr[2] = false;
arr[3] = '666';
arr[4] = '777';
// 修改引用数据类型
arr[5].name = 'arr';

console.log(arr); // [ 666, 777, false, '666', '777', { name: 'arr' } ]
console.log(copiedArr); // [ 1, 2, true, '1', '2', { name: 'plasticine' } ]
