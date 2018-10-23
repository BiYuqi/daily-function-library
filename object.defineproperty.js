const _router = {
  wrap: {
    get: {
      base: '$router'
    }
  }
}
Object.defineProperty(_router, '$router', {
  get () {
    return _router.wrap.get
  }
})
console.log(_router.$router)