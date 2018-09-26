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
      console.log(thisArg, args, path)
      let result = obj
      for (let i = 0; i < path.length; i++) {
        if (!result) {
          break
        }
        result = result[path[i]]
      }
      if (result === undefined || result === null) {
        result = args[0]
      }
      return result
    }
  })
}
const res = proxy(obj).a('999')
console.log(res)