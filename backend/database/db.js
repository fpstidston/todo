const Sequelize = require('sequelize')
const db = {}
const sequelize = new Sequelize('todo', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql',
  port: 8889,
  operatorsAliases: false,

  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
