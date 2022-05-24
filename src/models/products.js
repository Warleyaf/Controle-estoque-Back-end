const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  name: String,
  price: Number,
  qtd: Number,
})

const Model = mongoose.model('products', schema)

module.exports = Model