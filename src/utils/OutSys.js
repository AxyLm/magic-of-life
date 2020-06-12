/**
 * 外部系统跳转
 */
export default {
  checkOutSysUrl: function(to) {
    const url = to.path
    if (url && (url.indexOf('/http') === 0 || url.indexOf('/https') === 0)) {
      let toUrl = url
      // 处理开头
      if (toUrl.indexOf('/') === 0) {
        toUrl = toUrl.replace('/', '')
      }
      // 处理转义问题
      toUrl = toUrl.replace(':/', '://')
      // 处理参数
      if (to.query) {
        toUrl += '?'
        let i = 0
        for (const key in to.query) {
          if (i > 0) {
            toUrl += '&'
          }
          toUrl += key + '=' + to.query[key]
          i++
        }
      }
      window.open(toUrl)
      return true
    }
    return false
  }
}
