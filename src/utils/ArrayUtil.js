/**
 * 数据工具类
 */

export default {
  /**
   * 清空数据
   * @param array
   */
  clear: function(array) {
    if (this.isNotEmpty(array)) {
      while (array.pop()) {

      }
    }
  },
  /**
   * 数组是否为空
   * @param array
   * @returns {boolean}
   */
  isEmpty: function(array) {
    return !this.isNotEmpty(array)
  },
  /**
   * 数据是否不为空
   * @param array
   * @returns {*|boolean}
   */
  isNotEmpty: function(array) {
    return array && array.length > 0
  },
  /**
   * 数据是否包含对象
   * @param array
   * @param item
   * @param key 可为空，不为空时，判断根据对象的key对应值
   * @returns {boolean}
   */
  contain: function(array, item, key) {
    let flag = false
    if (this.isNotEmpty(array) && item) {
      flag = array.indexOf(item) >= 0
      if (!flag && key) {
        for (let i = 0; i < array.length; i++) {
          const a = array[i]
          if (a[key] === item[key]) {
            flag = true
            break
          }
        }
      }
    }
    return flag
  },
  /**
   * 根据索引删除数组值
   * @param list
   * @param index
   */
  delIndex(list, index) {
    if (this.isNotEmpty(list) && list.length > index) {
      list.splice(index, 1)
    }
  },
  /**
   * 清理空字符
   * @param tableData
   */
  clearDetailConfirm(tableData) {
    console.debug(tableData)
    if (tableData) {
      for (let i = tableData.length - 1; i >= 0; i--) {
        const dataItem = tableData[i]
        // 修改前和修改后都没有值时，清空此条数据
        if (!dataItem.before && !dataItem.after) {
          console.debug('clearDetailConfirm:' + dataItem.rowName)
          this.delIndex(tableData, i)
        } else {
          // 数据为空是置为空字符串
          if (dataItem.before === null || dataItem.before === undefined) {
            dataItem.before = ''
          }
          if (!dataItem.after === null || dataItem.after === undefined) {
            dataItem.after = ''
          }
          dataItem.before = clearText(dataItem.before)
          dataItem.after = clearText(dataItem.after)
        }
      }
    }
    console.debug(tableData)
  }
}

/**
 * 清理空字符
 * @param text
 * @returns {*}
 */
function clearText(text) {
  if (text && typeof text === 'string') {
    while (text.indexOf('null') >= 0) {
      text = text.replace('null', '')
    }
    while (text.indexOf('undefined') >= 0) {
      text = text.replace('undefined', '')
    }
  }
  return text
}
