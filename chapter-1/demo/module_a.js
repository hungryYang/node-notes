console.log('a')

exports.name="haha"
exports.data="this is data"

var privateVariable = 5

exports.getPrivate = function () {
  return privateVariable
}