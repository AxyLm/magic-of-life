const path = require('path');
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  devServer:{
    port:3333,
  },
  lintOnSave: false,
}