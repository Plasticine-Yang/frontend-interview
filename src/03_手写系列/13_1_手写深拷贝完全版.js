/**
 * @description 深拷贝
 * @param {Object} obj 对象
 * @param {WeakMap} circleMap 用于标记属性是否被循环引用
 */
function deepClone(obj, circleMap = new WeakMap()) {
  if (typeof obj !== 'object') {
    // 基础数据类型和函数类型无需
    return obj;
  }

  // 循环引用直接返回
  if (circleMap.get(obj) === true) return obj;

  // 深拷贝 Map 对象
  if (obj instanceof Map) {
    const copiedMap = new Map();
    obj.forEach((value, key) => copiedMap.set(key, deepClone(value)));

    return copiedMap;
  }

  // 深拷贝 Set 对象
  if (obj instanceof Set) {
    const copiedSet = new Set();
    obj.forEach((value) => copiedSet.add(value));

    return copiedSet;
  }

  // 深拷贝 Date 和 RegExp 类型
  const constructor = obj.constructor;
  if (/^(RegExp|Date)$/i.test(constructor.name)) {
    // RegExp 或 Date 类型
    return new constructor(obj);
  }

  // 处理 object 和 function 类型
  if (typeof obj === 'object' && obj !== null) {
    // 标记当前遍历的 key 已经被拷贝过
    circleMap.set(obj, true);

    // 深拷贝对象或数组
    const copiedObj = Array.isArray(obj) ? [] : {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        copiedObj[key] = deepClone(obj[key], circleMap);
      }
    }

    return copiedObj;
  }
}

// 测试深拷贝

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
  },
  map: new Map([
    ['key1', 'value1'],
    ['key2', 'value2']
  ]),
  set: new Set([1, 1, 2, 3, 5, 8, 13, 1, 1, 2, 3, 5, 8, 13])
};

// 添加循环引用
foo.circle = foo;

const copiedFoo = deepClone(foo);

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

// 修改 Map 对象
foo.map.set('key1', 'hello');

// 修改 Set 对象
foo.set.delete(1);

console.log(foo);
// <ref *1> {
//   name: 'foo',
//   age: 21,
//   isMale: true,
//   friends: [ 'Alan', 'Jack', 'Mike', 'Steven' ],
//   info: { hobby: 'coding', height: '178cm', weight: '80kg' },
//   date: 2022-05-13T03:42:34.617Z { newProp: 'date new prop' },
//   regExp: /^hello$/ { newProp: 'regExp new prop' },
//   say: [Function: say] { hello: 'hello' },
//   map: Map(2) { 'key1' => 'hello', 'key2' => 'value2' },
//   set: Set(5) { 2, 3, 5, 8, 13 },
//   circle: [Circular *1]
// }

console.log(copiedFoo);
// {
//   name: 'plasticine',
//   age: 20,
//   isMale: true,
//   friends: [ 'Alan', 'Jack', 'Mike' ],
//   info: { hobby: 'coding', height: '178cm' },
//   date: 2022-05-13T03:42:34.617Z,
//   regExp: /^hello$/,
//   say: [Function: say] { hello: 'hello' },
//   map: Map(2) { 'key1' => 'value1', 'key2' => 'value2' },
//   set: Set(6) { 1, 2, 3, 5, 8, 13 },
//   circle: <ref *1> {
//     name: 'foo',
//     age: 21,
//     isMale: true,
//     friends: [ 'Alan', 'Jack', 'Mike', 'Steven' ],
//     info: { hobby: 'coding', height: '178cm', weight: '80kg' },
//     date: 2022-05-13T03:42:34.617Z { newProp: 'date new prop' },
//     regExp: /^hello$/ { newProp: 'regExp new prop' },
//     say: [Function: say] { hello: 'hello' },
//     map: Map(2) { 'key1' => 'hello', 'key2' => 'value2' },
//     set: Set(5) { 2, 3, 5, 8, 13 },
//     circle: [Circular *1]
//   }
// }

// 深拷贝数组
const arr = [1, 2, true, '1', '2', { name: 'plasticine' }];
const copiedArr = deepClone(arr);

// 修改基础数据类型
arr[0] = 666;
arr[1] = 777;
arr[2] = false;
arr[3] = '666';
arr[4] = '777';
arr[5].name = 'arr';

console.log(copiedArr); // [ 1, 2, true, '1', '2', { name: 'plasticine' } ]
