const fs = require('fs')
const path = require('path')

const basename = path.basename(__filename)
const models = {}

fs.readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
    )
  })
  .forEach(file => {
    const filename = file.split('.')[0]
    const modelName = filename.charAt(0).toUpperCase() + filename.slice(1)
    models[modelName] = require('./' + file)
  })

module.exports = models
