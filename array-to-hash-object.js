/**
 * @param {Array} arr 
 * @param {String} key 
 * 数组对象转map map 结构
 * @example
 * [{
 *   id: 1,
 *   name: 'biyuqi',
 *   age: 26
 * },
 * {
 *  id: 2,
 *  name: 'bailemen',
 *  age: 101
 * }
 * @return
 * {
 * 1: {
 *   name: 'biyuqi',
 *   age: 26
 * },
 * 2:{
 *    name: 'bailemen',
 *    age: 101
 *   }
 * }
 */
function arrToHash (arr, key) {
  if (!Array.isArray(arr)) {
    throw 'arr must be an array'
  }
  if (arr.length === 0) {
    throw 'The length of arr is not allow zero'
  }
  if (typeof key !== 'string') {
    throw 'key is must be string'
  }
  const map = {}
  const len = arr.length
  for (let i = 0; i < len; i++) {
    const keys = arr[i][key]
    delete arr[i][key]
    map[keys] = arr[i]
  }
  return map
}
// const before = [
//   {
//     id: 1,
//     name: 'biyuqi',
//     age: 26
//   },
//   {
//     id: 2,
//     name: 'bailemen',
//     age: 101
//   }
// ]
// console.log(arrToHash(before, 'id'))