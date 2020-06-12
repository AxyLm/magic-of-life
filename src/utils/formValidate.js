/**
 * 校验 0 - 100
 * @param rule
 * @param value
 * @param callback
 */
export function validateAcquaintance(rule, value, callback) {
  if (value < 0 || value > 100) {
    callback(new Error('只能填写0-100之间'))
  } else {
    callback()
  }
}

/**
 * 判断不能为0
 * @param rule
 * @param value
 * @param callback
 */
export function notZero(rule, value, callback) {
  let nValue = value
  if (nValue) {
    nValue = parseFloat(nValue)
  }
  if (nValue === 0) {
    callback(new Error('不能为0'))
  } else {
    callback()
  }
}

/**
 * 判断比例之和
 * 多组分期时，计算比例之和为100
 * @param rule
 * @param value
 * @param callback
 * @param baseData
 * @param form
 */
export function rateRule(rule, value, callback, baseData, form) {
  let rate = 0
  // 读取字段，解析字段
  const formFields = form.fields
  const field = rule.field
  const names = field.split('.')
  const name = names[names.length - 1]
  const current = names[names.length - 2]
  const listName = field.substr(0, field.length - (name.length + current.length + 2))
  const list = baseData
  // 解析 prop 值，
  for (let i = 0; i < names.length - 2; i++) {
    const n = names[i]
    eval('list = list[\'' + n + '\']')
  }
  const fieldList = []
  let currentComp = null

  //循环处理值
  for (let i = 0; i < list.length; i++) {
    const item = list[i]
    let val = 0
    if (item[name]) {
      val = item[name]
    }
    rate += val

    //读取 form对应组件
    for (let j = 0; j < formFields.length; j++) {
      const comp = formFields[j]
      if (comp.prop === listName + '.' + i + '.' + name && comp.prop !== field) {
        fieldList.push(comp)
      } else {
        currentComp = comp
      }
    }
  }

  // 判断求和是否为100

  let errorMsg = ''
  if (rate === 100 || Math.abs(rate - 100) < 0.01) {
    callback()
  } else {
    errorMsg = '比例之和应为100,当前' + (parseFloat(rate.toFixed(2)))
    callback(new Error(errorMsg))
  }

  //处理提示信息
  for (let i = 0; i < fieldList.length; i++) {
    const comp = fieldList[i]
    if (errorMsg === '' && comp.validateMessage && comp.validateMessage.indexOf('比例之和应为100,当前') === 0) {
      comp.validateMessage = errorMsg
      comp.validateState = ''
    } else if ((errorMsg !== '' && (!comp.validateMessage || comp.validateMessage.indexOf('比例之和应为100,当前') === 0))) {
      // comp.error = errorMsg
      comp.validateMessage = errorMsg
      comp.validateState = 'error'
    }
  }

  function updateWidth(comp, text) {
    const el = comp.$el
    const errors = el.getElementsByClassName('el-form-item__error')
    if (errors && errors.length > 0 && text) {
      const width = Math.max(text.length * 14 + 20, 80)
      errors[0].style = 'width:' + width + 'px;'
    }
  }
}

