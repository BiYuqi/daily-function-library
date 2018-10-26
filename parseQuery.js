const str = `https://www.baidu.com?charge_id=1&chStation_id=1027&otherMsg=消息`

const parseQuery = (url = window.location.href) => {
  const path = url.split('?')[1]
  const reg = /(\w+)=([^&]+)/g
  const res = {}
  let m
  if (path && typeof path === 'string') {
    while (m = reg.exec(path)) {
      res[m[1]] = decodeURIComponent(m[2])
    }
    return res
  }
  return res
}
console.log(parseQuery(str))