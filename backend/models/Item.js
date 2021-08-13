const Sequelize = require('sequelize')
const db = require('../database/db.js')

module.exports = db.sequelize.define(
  'item',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    description: {
      type: Sequelize.STRING
    },
    completed: {
        type: Sequelize.BOOLEAN
    }
  },
  {
    timestamps: false
  }
)
