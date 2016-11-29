const mongoose = require('mongoose')

module.exports = mongoose.model('Contact', {
  name: {type: String, default: ''},
  phone: {type: String, default: ''},
  address: {type: String, default: ''}
})
