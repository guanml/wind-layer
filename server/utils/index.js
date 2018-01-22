const fs = require('fs')

const roundHours = (hours, interval) => {
  if(interval > 0){
    const result = (Math.floor(hours / interval) * interval)
    return result < 10 ? '0' + result.toString() : result
  } else {
    return null
  }
}

/**
 * 检查数据源文件是否存在
 * @param path
 * @param mkdir
 * @returns {boolean}
 */
const checkFileExists = (path, mkdir) => {
  try {
    fs.statSync(path)
    return true
  } catch (e) {
    if (mkdir) {
      fs.mkdirSync(path)
    }
    return false
  }
}

module.exports = {
  roundHours,
  checkFileExists
}