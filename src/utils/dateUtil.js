
export default {
  dateYear: function(time) {
    const current = new Date()
    const currentYear = current.getFullYear()
    const end = new Date()
    end.setFullYear(currentYear + 1, 11, 31)
    const start = new Date()
    start.setFullYear(currentYear - 2, 0, 1)
    return time <= start || time >= end
  },
  currentYear: function() {
    const current = new Date()
    const currentYear = current.getFullYear()
    return currentYear + ''
  }
}
