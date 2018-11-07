function create(o) {
  function F(){}
  F.prototype = o
  return new F()
}

const a = {
  aa: '123'
}
const b = create(a)
console.log(b.aa)