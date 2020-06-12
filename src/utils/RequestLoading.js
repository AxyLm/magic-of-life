
import { Loading } from 'element-ui'
import EncryptUtil from '@/utils/EncryptUtil' // Layout 是架构组件，不在后台返回，在文件里单独引入

/**
 * 加载蒙板
 * @type {number}
 */

let loadingCount = 0
let loading
/**
 * 过滤的URL
 * @type {string[]}
 */
const EXCLUDE_URL_LIST = ['/dataCode/',
  '/rule/exec',
  'listSourcePolicyNo',
  '/mess/',
  '/bcs/role/getRoleAuthByRole',
  'subjectHeader',
  'verificationInfo',
  '/orgMain/recordAmt',
  'orgMain/overdueSummary',
  'updateSessByOrg',
  '/bizQuery/cnpcSubComp',
  '/bcs/role/getOrgAuth',
  '/record/direct/insurSplit'
]
const loadMap = {}

/**
 * 开启加载中
 * @param ele 插入的节点
 */
const startLoading = (ele) => {
  let loadingtext = document.querySelector('.loadingtext')
  const doms = document.getElementsByClassName('loadingtext')
  if (doms) {
    for (let i = 0; i < doms.length; i++) {
      const dom = doms[i]
      if (!isHidden(dom)) {
        loadingtext = dom
        // break
      }
    }
  }

  //是否插入指定节点
  if (ele) {
    let eleItem = document.querySelector('.' + ele)
    const eleDoms = document.getElementsByClassName(ele)
    if (eleDoms) {
      for (let j = 0; j < eleDoms.length; j++) {
        const dom = eleDoms[j]
        if (!isHidden(dom)) {
          eleItem = dom
        }
      }
    }
    const loading = Loading.service({
      lock: true,
      text: '拼命加载中...',
      target: eleItem || loadingtext
    })
    const data = { ele: eleItem, loading: loading, count: 1 }
    loadMap[ele] = data
  } else {
    loading = Loading.service({
      lock: true,
      text: '拼命加载中...',
      target: loadingtext
    })
  }
}

/**
 * 判断节点是否隐藏
 * @param dom
 * @returns {boolean}
 */
const isHidden = (dom) => {
  let d = dom
  let isHidden = false
  while (d) {
    isHidden = isHidden || d.style.display === 'none'
    if (isHidden) {
      break
    }
    d = d.parentElement
  }
  return isHidden
}

/**
 * 关闭加载中
 * @param dom
 * @returns {boolean}
 */
const endLoading = (ele) => {
  if (ele) {
    const item = loadMap[ele]
    if (item) {
      item.loading.target = item.ele
      item.loading.close()
      loadMap[ele] = null
    }
  } else {
    loading.close()
  }
}

/**
 * URL包含判断
 * @param val
 * @returns {boolean}
 */
const containUrl = (val) => {
  let ret = false
  if (val && EXCLUDE_URL_LIST) {
    for (let i = 0; i < EXCLUDE_URL_LIST.length; i++) {
      const item = EXCLUDE_URL_LIST[i]
      if (item && val.indexOf(item) >= 0) {
        ret = true
        break
      }
    }
  }
  return ret
}

/**
 * 显示加载中
 * @param config
 */
export const showLoading = (config) => {
  let ele = null
  //判断URL
  if (config && config.url) {
    if (containUrl(config.url)) {
      return
    }
    if (config.data && config.data['_ele_']) {
      ele = config.data['_ele_']
    }
  }
  //判断是否指定节点
  if (ele) {
    const item = loadMap[ele]
    if (item) {
      let itemCount = item.count
      if (itemCount === 0) {
        startLoading(ele)
      }
      itemCount += 1
      item.count = itemCount
    } else {
      startLoading(ele)
    }
    return
  } else {
    console.info('loading full :' + (config.url))
  }
  if (loadingCount === 0) {
    startLoading()
  }
  loadingCount += 1
}

/**
 * 关闭加载中
 * @param config
 */
export const hideLoading = (config) => {
  let ele = null
  //判断URL
  if (config && config.url) {
    if (containUrl(config.url)) {
      return
    }
    if (config.data) {
      let dataJson = null

      if (typeof (config.data) === 'string') {
        dataJson = JSON.parse(config.data)
      } else if (typeof (config.data) === 'object') {
        dataJson = config.data
      }
      // 密文参数时，处理参数解析
      if (dataJson['_ele_']) {
        if (dataJson['_key_']) {
          ele = EncryptUtil.aesDecrypt(dataJson['_ele_'], EncryptUtil.getUrlKey())
        } else {
          ele = dataJson['_ele_']
        }
      }
    }
  }

  // 判断指定节点
  if (ele) {
    const item = loadMap[ele]
    if (item) {
      let itemCount = item.count
      if (itemCount <= 0) {
        return
      }
      itemCount -= 1
      item.count = itemCount
      if (itemCount === 0) {
        endLoading(ele)
      }
    }
    return
  }
  if (loadingCount <= 0) {
    return
  }
  loadingCount -= 1
  if (loadingCount === 0) {
    endLoading()
  }
}
