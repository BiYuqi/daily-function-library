const obj = {
  a: 123,
  b: 234
}
const proxy = (obj, path = []) => {
  return new Proxy(() => {}, {
    get: (target, key) => {
      console.log(target, key)
      return proxy(obj, path.concat(key))
    },
    apply: (target, thisArg, args) => {
      let result = obj
      for (let i = 0; i < path.length; i++) {
        result = result[path[i]]
        if (!result) {
          result = args[0]
          break
        }
      }
      return result
    }
  })
}
proxy(obj).a('占位符') // 123
proxy(obj).a.c('占位符') // 占位符