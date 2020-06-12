export default {
  convert: function(data, names) {
    const ret = []
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      ret.push(this.objToArray(item, names))
    }
    return ret
  },
  objToArray: function(item, names) {
    const itemArray = []
    for (let i = 0; i < names.length; i++) {
      let val = item[names[i]]
      if (i > 0 && val && !isNaN(parseFloat(val))) {
        val = parseFloat(val).toFixed(2)
      }
      itemArray.push(val)
    }
    return itemArray
  },
  convertPit(data, name, value) {
    const ret = []
    for (let i = 0; i < data.length; i++) {
      const item = data[i]
      let val = item[value]
      if (val) {
        val = val.toFixed(2)
      }
      ret.push([item[name], val])
    }
    return ret
  },
  /**
   * 费率配置
   * @param rule
   * @param value
   * @param callback
   */
  baseRate: function(baseRateList) {
    const BASE_RATE = 1.06
    let newbase = 0
    if (baseRateList) {
      newbase = baseRateList[0].dataValue
      return parseFloat(newbase)
    } else {
      return BASE_RATE
    }
  }

}
