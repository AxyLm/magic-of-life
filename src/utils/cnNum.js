export function convertNumber(num) {
  const changeNum = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九'] // changeNum[0] = "零"
  const unit = ['', '十', '百', '千', '万']
  num = parseInt(num)
  const getWan = (temp) => {
    const strArr = temp.toString().split('').reverse()
    let newNum = ''
    for (var i = 0; i < strArr.length; i++) {
      newNum = (i === 0 && strArr[i] === 0 ? '' : (i > 0 && strArr[i] === 0 && strArr[i - 1] === 0 ? '' : changeNum[strArr[i]] + (strArr[i] === 0 ? unit[0] : unit[i]))) + newNum
    }
    if (temp > 10 && temp < 20) {
      newNum = newNum.substr(1)
    } else if (temp === 10) {
      newNum = '十'
    }
    return newNum
  }
  const overWan = Math.floor(num / 10000)
  let noWan = num % 10000
  if (noWan.toString().length < 4) noWan = '0' + noWan
  return overWan ? getWan(overWan) + '万' + getWan(noWan) : getWan(num)
}
