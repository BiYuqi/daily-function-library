const str = `https://www.baidu?key=1&key2=2&path=sdfdsfsdfsd&id=23423423`

export const urlParse = (url = window.location.href) => {
  const path = url.split('?')[1]
  const reg = /(\w+)=([^&]+)/g
  const res = {}
  let m
  if (path && typeof path === 'string') {
    while (m = reg.exec(path)) {
      res[m[1]] = m[2]
    }
    return res
  }
  return Throw ('Unusable character')
}