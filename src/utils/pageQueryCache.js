import EncryptUtil from '@/utils/EncryptUtil'

/**
 * 查询缓存工具类
 *
 */

const QUERY_CACHE = {}
const URL_CACHE = []

/**
 * 初始化缓存
 * @param config
 */
export const initCache = (config) => {
  // 特殊情况不进行缓存
  if (config.data && config.data.no_cache) {
    delete config.data.no_cache
    return
  }
  QUERY_CACHE[getKey(config.url)] = config.data
}

/**
 * URL缓存
 * @param from
 * @param to
 */
export const initUrlCache = (from, to) => {
  URL_CACHE.push({ from: from, to: to })
}

/**
 * 获取最后一次缓存的URL
 * @returns {null}
 */
export const getLastUrl = () => {
  return URL_CACHE.length === 0 ? null : URL_CACHE[URL_CACHE.length - 1]
}

/**
 * 初始化URL缓存
 * @param config
 */
export const initPageCache = (config) => {
  const url = getUrl()
  QUERY_CACHE[url] = config.data
}

/**
 * 获取当前URL最后一次查询条件
 * @param url
 * @returns {*}
 */
export const getLastQuery = (url) => {
  return QUERY_CACHE[getKey(url)]
}

/**
 * 获取当前URL最后一次查询条件
 * @returns {*}
 */
export const getLastPageQuery = () => {
  const url = getUrl()
  return QUERY_CACHE[url]
}

/**
 * 获取URL
 * @returns {*}
 */
export const getUrl = () => {
  return getKey(location.href)
}

/**
 * MD5加密
 * @param val
 * @returns {*}
 */
export const getKey = (val) => {
  return EncryptUtil.md5(val)
}

/**
 * 返回
 */
export const back = (router) => {
  const url = getLastUrl()
  if (url) {
    console.info('page query last url : ')
    console.info(url)
    let toUrl = url.from.name
    if (toUrl) {
      if (toUrl === 'RecordSchemeList') {
        toUrl = 'Direct'
      } else if (toUrl === 'InsureconsultationRecord') { // InsureconsultationRecord
        toUrl = 'Insureconsultation'
      } else {
        router.push(url.from.fullPath)
        return
      }
      const to = url.to
      if (to && to.query && to.query.resource && to.query.resource === 'activiti') {
        toUrl = '/' + toUrl
      }
      router.push(toUrl)
    } else {
      router.back(-1)
    }
  } else {
    router.push('/')
  }
}
