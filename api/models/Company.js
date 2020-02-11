const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Company = new Schema({
  company_name: {
    type: String
  }
},{
    collection: 'company'
});

module.exports = mongoose.model('Company', Company);