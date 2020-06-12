
import ArrayUtil from '@/utils/ArrayUtil'
import { getToken } from '@/utils/auth'

/**
 * 事件派发KEY
 * @type {string[]}
 */
const EVENT_KEY = ['orgChange']
/**
 * 本地缓存KEY
 * @type {string[]}
 */
const LOCAL_KEY = ['roleshow', 'account', 'roles', 'userId', 'user', 'roleType','orgName','orgCode','orgType','username','orgList']

export default {
  /**
   * 保存属性，等同与set方法
   * @param key 键
   * @param val 值，可以是对象和字符串
   * @param eFlag 是否派发事件
   */
  setItem: function(key, val, eFlag) {
    this.set(key, val)
  },
  /**
   * 获取属性 等同于get
   * @param key 键
   * @returns 字符串或对象
   */
  getItem: function(key) {
    return this.get(key)
  },
  /**
   * 删除属性值，等同于remove
   * @param key
   */
  removeItem: function(key) {
    this.remove(key)
  },
  /**
   * 保存属性，等同与set方法
   * @param key 键
   * @param val 值，可以是对象和字符串
   * @param eFlag 是否派发事件
   */
  set: function(key, val, eFlag) {
    // 是否需要派发事件
    const eventFlag = eFlag || ArrayUtil.contain(EVENT_KEY, key)
    if (eventFlag) {
      // 修改前事件
      this.dispatchEvent('before' + key, key, val)
    }
    let saveVal = val
    // 对象转换成json字符串
    if (typeof saveVal === 'object') {
      saveVal = JSON.stringify(saveVal)
    }
    // 保存会话数据
    this.setSession(key, saveVal)
    if (eventFlag) {
      // 触发修改事件
      this.dispatchEvent(key, key, val)
    }
    // 是否保存本地存储
    if (ArrayUtil.contain(LOCAL_KEY, key)) {
      this.setLocal(key, saveVal)
    }
  },
  /**
   * 获取属性
   * @param key 键
   * @returns {*}
   */
  get: function(key) {
    let val = this.getSession(key)
    // 会话没有，判断是否在本地取
    if (!val && ArrayUtil.contain(LOCAL_KEY, key)) {
      val = this.getLocal(key)
    }
    // 如果是json字符串，转对象
    if (this.isJsonString(val)) {
      val = JSON.parse(val)
    }
    return val
  },
  remove: function(key) {
    this.removeSession(key)
  },
  setSession: function(key, val) {
    sessionStorage.setItem(key, val)
  },
  getSession: function(key) {
    return sessionStorage.getItem(key)
  },
  removeSession: function(key) {
    sessionStorage.removeItem(key)
  },
  getLocal: function(key) {
    let val = null
    if (window.localStorage && getToken()) {
      val = window.localStorage.getItem(key)
    }
    return val
  },
  setLocal: function(key, val) {
    if (window.localStorage && getToken()) {
      window.localStorage.setItem(key, val)
    }
  },
  removeLocal: function(key) {
    if (window.localStorage) {
      window.localStorage.removeItem(key)
    }
  },
  /**
   * 发起事件
   * @param eventName
   * @param key
   * @param val
   */
  dispatchEvent(eventName, key, val) {
    // 创建事件
    var newStorageEvent = document.createEvent('StorageEvent')
    // 初始化事件
    newStorageEvent.initStorageEvent(eventName, false, false, key, null, val, null, null)
    // 派发事件
    window.dispatchEvent(newStorageEvent)
  },
  isJsonString(val) {
    let flag = false
    if (val && typeof val === 'string') {
      try {
        const json = JSON.parse(val)
        if (json && typeof json === 'object') {
          flag = true
        }
      } catch (e) {
        console.info('check  json string error : ' + val)
      }
    }
    return flag
  }
}
