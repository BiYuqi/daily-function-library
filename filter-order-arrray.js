/**
 * 
 * @param {*} ary 数组对象
 * @param {*} types
 * @param 根据某一属性排序 归类
 */
function filterAryAndOut (ary, types, mark) {
  const res = []
  for (let i = 0; i < types.length; i++) {
    const tar = ary.filter(item => item[mark] === types[i])
    for (let j = 0; j < tar.length; j++) {
      res.push(tar[j])
    }
  }
  return res
}

const ary = [
  {
    id: 0,
    type: 'film'
  },
  {
    id: 2,
    type: 'book'
  },
  {
    id: 1,
    type: 'film'
  },
  {
    id: 4,
    type: 'film'
  }
]
console.log(filterAryAndOut(ary, ['book', 'film'], 'type'))