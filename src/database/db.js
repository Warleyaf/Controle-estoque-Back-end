const mongoose = require('mongoose')

function connect() {
  mongoose.connect('mongodb://localhost:27017/loja')
  const db = mongoose.connect
}

module.exports = {
  connect
}