
import EncryptUtil from '@/utils/EncryptUtil'

/**
 * 请求工具类
 * @type {{}}
 */

const REQUEST_CACHE = {}
const REPEAT_TIME = 5 * 1000
const REPEAT_URL_LIST = ['save', 'cancel']
const EXCLUDE_URL_LIST = ['/dataCode/list']

export default {
  /**
   * 加密参数
   * @param config
   * @returns {*}
   */
  configHandler: function(config) {
    const ret = config
    let flag = true
    //判断是否剔除
    for (const urlStr of EXCLUDE_URL_LIST) {
      if (urlStr === ret.url) {
        flag = false
        break
      }
    }
    if (flag) {
      ret.data = EncryptUtil.paramEncrypt(ret.data)
    }
    return ret
  },
  /**
   * 判断是否重复点击
   * @param config
   * @returns {boolean}
   */
  isRepeat: function(config) {
    const url = config.url
    let urlFlag = false
    for (let i = 0; i < REPEAT_URL_LIST.length; i++) {
      const str = REPEAT_URL_LIST[i]
      if (url && url.indexOf(str) >= 0) {
        urlFlag = true
        break
      }
    }
    if (urlFlag) {
      const key = EncryptUtil.md5(config.url + '@' + JSON.stringify(config.data))
      const item = REQUEST_CACHE[key]
      const ret = item != null && item.time + REPEAT_TIME > new Date().getTime()
      if (!ret) {
        this.setCache(key, config)
      }
      return ret
    }
    return false
  },
  /**
   * 设置缓存
   * @param key
   * @param config
   */
  setCache: function(key, config) {
    REQUEST_CACHE[key] = {
      time: new Date().getTime(),
      url: config.url,
      data: config.data,
      key: key
    }
  }
}

