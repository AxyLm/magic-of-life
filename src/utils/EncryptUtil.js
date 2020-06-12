
import crypto from 'crypto'
import CryptoJS from 'crypto-js/crypto-js'

/**
 * 加密工具类
 * @type {string}
 */
const ENCRYPTION_PARAM_NAME = '_broker_'
const ENCRYPTION_PARAM_KEY_NAME = '_key_'
const KEY = CryptoJS.enc.Utf8.parse('1234567890123456')
const IV = CryptoJS.enc.Utf8.parse('1234567890123456')
// 密钥 - 公钥
const PARAM_PUBLIC_KEY = '-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCYvvF2UsrZb9/nxLJxn+G870F4WjyOlkGn2TueR+o1vGlrIQnaD48Jyn1EtVo24L8mrscTRl3p2UXgvOoPxVF9gR/AUttVUEPPQDO3lf+EqcPd6VRhEgreKGzbdjZOU9BuWLJluoXTX032wtTl9U9qFvq5lMJJ4BTkcWb8UsuZGQIDAQAB-----END PUBLIC KEY-----'
export default {
  parameterName: ENCRYPTION_PARAM_NAME,
  /**
   * URL加密
   * @param to
   * @returns {boolean}
   */
  urlEncrypt: function(to) {
    //开发环境不加密
    const envFlag = false //process.env.NODE_ENV !== 'development'
    if (envFlag && to && to.query) {
      //判断是否已经加密
      if (!to.query[ENCRYPTION_PARAM_NAME]) {
        const queyr = to.query
        const val = JSON.stringify(queyr)
        let i = 0
        for (const key in queyr) {
          to.query[key] = null
          i++
        }
        if (i > 0) {
          // 加密参数
          to.query[ENCRYPTION_PARAM_NAME] = this.aesEncrypt(val, this.getUrlKey())
          return true
        }
      }
    }
    return false
  },
  /**
   * URL解密
   * @param to
   * @returns {*}
   */
  urlDecrypt: function(to) {
    if (to && to.query) {
      // 判断是否进行加密
      if (to.query[ENCRYPTION_PARAM_NAME]) {
        const val = to.query[ENCRYPTION_PARAM_NAME]
        // 解密
        const ret = this.aesDecrypt(val, this.getUrlKey())
        to.query[ENCRYPTION_PARAM_NAME] = null
        const retObj = JSON.parse(ret)
        for (const key in retObj) {
          to.query[key] = retObj[key]
        }
      }
    }
    return to
  },
  /**
   * AES 加密
   * @param value
   * @param keyStr
   * @returns {string}
   */
  aesEncrypt: function(value, keyStr) {
    // const cipher = crypto.createCipher('aes', key)
    // let ret = cipher.update(val, 'utf8', 'hex')
    // ret += cipher.final('hex')
    // return ret
    // AES 加密
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const srcs = CryptoJS.enc.Utf8.parse(value)
    var encrypted = CryptoJS.AES.encrypt(srcs, key, { iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding })
    return encrypted.ciphertext.toString()
  },
  /**
   * AES 解密
   * @param val
   * @param keyStr
   * @returns {string}
   */
  aesDecrypt: function(val, keyStr) {
    // const decipher = crypto.createDecipher('aes', key)
    // let ret = decipher.update(val, 'hex', 'utf8')
    // ret += decipher.final('utf8')
    // return ret
    const key = CryptoJS.enc.Utf8.parse(keyStr)
    const encryptedHexStr = CryptoJS.enc.Hex.parse(val.toUpperCase())
    const srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr)
    const decrypt = CryptoJS.AES.decrypt(srcs, key, { iv: IV, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.ZeroPadding })
    const decryptedStr = decrypt.toString(CryptoJS.enc.Utf8)
    return decryptedStr.toString()
  },
  /**
   * MD5 加密
   * @param str
   * @returns {PromiseLike<ArrayBuffer>}
   */
  md5: function(str) {
    var md5 = crypto.createHash('md5')
    md5.update(str)
    return md5.digest('hex')
  },
  /**
   * 根据URL生成key
   * @returns {*|PromiseLike<ArrayBuffer>}
   */
  getUrlKey: function() {
    return this.md5(sessionStorage.getItem('account') || 'user123456')
  },
  /**
   * RSA 解密
   * @param val
   * @param key
   * @returns {*}
   */
  rsaDecrypt: function(val, key) {
    const ret = crypto.publicDecrypt(key, val)
    return ret
  },
  /**
   * RSA 加密
   * @param val
   * @param key
   * @returns {*}
   */
  rsaEncrypt: function(val, key) {
    const ret = crypto.publicEncrypt(key, Buffer.from(val, 'utf8'), false)
    return ret
  },
  /**
   * 参数加密
   * @param param
   * @returns {*}
   */
  paramEncrypt: function(param) {
    // 判断开发环境
    const envFlag = false //process.env.NODE_ENV !== 'development'
    let ret = param
    if (envFlag && param) {
      const json = {}
      const _ele_ = param['_ele_']
      // 生成16位随机密钥
      const key = this.md5('f' + new Date().getTime()).substring(0, 16)
      // 密钥加密
      const rsaKey = this.rsaEncrypt(key, PARAM_PUBLIC_KEY).toString('hex')
      json[ENCRYPTION_PARAM_KEY_NAME] = rsaKey
      // 密文加密
      json[ENCRYPTION_PARAM_NAME] = this.paramAesEncrypt(JSON.stringify(param), key)
      ret = json
      if(_ele_){
        ret['_ele_'] = this.aesEncrypt(_ele_,this.getUrlKey())
      }
    }
    return ret
  },
  /**
   * 参数aes加密
   * @param value
   * @param keyStr
   * @returns {string}
   */
  paramAesEncrypt: function(value, keyStr) {
    // AES 加密
    let key = KEY
    const iv = IV

    if (keyStr) {
      key = CryptoJS.enc.Utf8.parse(keyStr)
    }

    const srcs = CryptoJS.enc.Utf8.parse(value)
    var encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.ZeroPadding
    })
    return encrypted.ciphertext.toString()
  }
}

