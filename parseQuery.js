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
const log = '?sid=RByZiPniWiCVWvnwJRiiGVSKrVrALpQv&df=unknow#module=mbox.ListModule%7C%7B"filter"%3A%7B"flags"%3A%7B"read"%3Afalse%7D%7D%2C"order"%3A"date"%2C"desc"%3Atrue%2C"fids"%3A%5B1%2C3%2C18%2C258%2C8695094%2C8695095%2C257%5D%7D'
console.log(parseQuery(log))