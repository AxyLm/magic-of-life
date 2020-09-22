var SIGN_REGEXP = /([yMdhsm])(\1*)/g
var DEFAULT_PATTERN = 'yyyy-MM-dd'
function padding(s, len) {
  var lens = len - (s + '').length
  for (var i = 0; i < lens; i++) { s = '0' + s }
  return s
}

export default {
  getQueryStringByName: function(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    var context = ''
    if (r != null) { context = r[2] }
    reg = null
    r = null
    return context == null || context === '' || context === 'undefined' ? '' : context
  },
  formatDate: {

    format: function(date, pattern) {
      pattern = pattern || DEFAULT_PATTERN
      return pattern.replace(SIGN_REGEXP, function($0) {
        switch ($0.charAt(0)) {
          case 'y': return padding(date.getFullYear(), $0.length)
          case 'M': return padding(date.getMonth() + 1, $0.length)
          case 'd': return padding(date.getDate(), $0.length)
          case 'w': return date.getDay() + 1
          case 'h': return padding(date.getHours(), $0.length)
          case 'm': return padding(date.getMinutes(), $0.length)
          case 's': return padding(date.getSeconds(), $0.length)
        }
      })
    },
    parse: function(dateString, pattern) {
      var matchs1 = pattern.match(SIGN_REGEXP)
      var matchs2 = dateString.match(/(\d)+/g)
      if (matchs1.length === matchs2.length) {
        var _date = new Date(1970, 0, 1)
        for (var i = 0; i < matchs1.length; i++) {
          var _int = parseInt(matchs2[i])
          var sign = matchs1[i]
          switch (sign.charAt(0)) {
            case 'y': _date.setFullYear(_int); break
            case 'M': _date.setMonth(_int - 1); break
            case 'd': _date.setDate(_int); break
            case 'h': _date.setHours(_int); break
            case 'm': _date.setMinutes(_int); break
            case 's': _date.setSeconds(_int); break
          }
        }
        return _date
      }
      return null
    }

  },
  codeLen(codeList,flag){
    let len = 0
    for(let i=0;i<codeList.length;i++){
      const item = codeList[i]
      let itemLen = item.codename
      if(item.children){
        let cLen = this.codeLen(item.children,flag)
        if(flag){
          itemLen = itemLen+cLen
        }else{
          itemLen = Math.max(cLen,itemLen)
        }
      }
      len = Math.max(len,itemLen)
    }
    return len
  },
  formatCode(row, col, cell, index, codeList) {
    if (cell) {
      if (cell.indexOf(',') < 0) {
        if (this.isParentName(col)) {
          return this.parentFormatCode(row, col, cell, index, codeList)
        } else {
          return this.defFormatCode(row, col, cell, index, codeList)
        }
      } else {
        const values = cell.split(',')
        const retValues = []
        for (let i = 0; i < values.length; i++) {
          if (this.isParentName(col)) {
            retValues.push(this.parentFormatCode(row, col, values[i], index, codeList))
          } else {
            retValues.push(this.defFormatCode(row, col, values[i], index, codeList))
          }
        }
        return retValues.join(',')
      }
    }
  },
  defFormatCode(row, col, cell, index, codeList) {
    let ret = cell
    if (codeList) {
      for (let i = 0; i < codeList.length; i++) {
        if (codeList[i].codevalue === cell) {
          ret = codeList[i].codename
          break
        } else if (codeList[i].children && codeList[i].children.length > 0) {
          const children = codeList[i].children
          ret = this.formatCode(row, col, cell, index, children)
          if (ret !== cell) {
            break
          }
        }
      }
    }
    return ret
  },
  isParentName(col) {
    if (col && (col.property === 'bizProperty' || col.column === 'bizProperty' || col.label === '业务性质' || col.label === '业务划分')) {
      return true
    }
    return false
  },
  parentFormatCode(row, col, cell, index, codeList) {
    let ret = cell
    if (codeList) {
      let current = this.getParentNode(codeList, cell)
      if (current) {
        const fullName = [current.codename]
        while (current) {
          current = this.getParentNode(codeList, current.parentCode)
          if (current) {
            fullName.push(current.codename)
          }
        }
        fullName.reverse()
        ret = fullName.join('-')
      }
    }
    return ret
  },
  /* getCurrentNode(row, col, cell, index, codeList){
    let ret = null
    if (codeList) {
      for (let i = 0; i < codeList.length; i++) {
        if (codeList[i].codevalue === cell) {
          ret = codeList[i]
          break
        } else if (codeList[i].children && codeList[i].children.length > 0) {
          const children = codeList[i].children
          ret = this.formatCode(row, col, cell, index, children)
          if (ret !== cell) {
            break
          }
        }
      }
    }
    return ret
  },*/
  getParentNode(list, parentCode) {
    for (const item of list) {
      if (parentCode === item['codevalue']) {
        return item
      } else if (item['children']) {
        const children = this.getParentNode(item['children'], parentCode)
        if (children) {
          return children
        }
      }
    }
  }

}
