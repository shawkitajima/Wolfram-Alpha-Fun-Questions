const mongoose = require('mongoose');

const qaSchema = new mongoose.Schema({
  log: Array
}, {
  timestamps: true
});

module.exports = mongoose.model('Qa', qaSchema);