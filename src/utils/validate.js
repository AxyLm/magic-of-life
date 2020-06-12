/**
 * Created by ma.ly on 19/05/07.
 */

export function isvalidUsername(str) {
  // const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  return true
  const valid_map = ['admin', 'editor']
  // return valid_map.indexOf(str.trim()) >= 0
  return true
}

export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

export function isvalidatePassword(path) { // 密码只能是字母数字和符号
  return /^[a-z_A-Z0-9-\.!@#\$%\\\^&\*\)\(\+=\{\}\[\]\/",'<>~\·`\?:;|]+$/.test(path)
}
export function isvalidPhone(str) { // 校验手机号
  const reg = /^1[3|4|5|7|8][0-9]\d{8}$/
  return reg.test(str)
}
export function telephoneNumber(str) { // 校验电话号码
  const reg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/
  return reg.test(str)
}
export function isvalidCertNo(str) { // 校验身份证
  const reg = /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/
  return reg.test(str)
}

export function isvalidMoney(str) { // 校验金钱 两位小数
  const reg = /(^[1-9]\d*(\.\d{1,2})?$)|(^0(\.\d{1,2})?$)/
  return reg.test(str)
}
