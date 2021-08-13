const express = require('express')
const items = express.Router()

const Item = require('../../models/Item')

items.get('/', (req, res) => {
  Item.findAll()
    .then(items => {
      res.json(items)
    })
    .catch(err => {
      res.send('error ' + err)
    })
})

items.put('/', (req, res) => {
  const item = req.body

  Item.upsert(item, {
    fields: ['completed']
  })
    .then(_ => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.send('error ' + err)
    })
})

items.post('/', (req, res) => {
  const item = req.body

  Item.create(item)
    .then(_ => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.send('error ' + err)
    })
})

items.delete('/:id', (req, res) => {
  const id = req.params.id

  Item.destroy({
    where: {
      id
    }
  })
    .then(_ => {
      res.sendStatus(200)
    })
    .catch(err => {
      res.send('error ' + err)
    })
})

module.exports = items

