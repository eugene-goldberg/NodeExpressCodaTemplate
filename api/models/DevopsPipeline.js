const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for DevopsPipeline
let DevopsPipeline = new Schema({
  company_name: {
    type: String
  },
  program_name: {
    type: String
  },
  application_name: {
    type: String
  },
application_component_name: {
type: String
  },
  hosting_model: {
 type: String
  },
  environment: {
  type: String
  },
  pipeline_name: {
  type: String
  },
  pipeline_type: {
  type: String
  },
},
{
    collection: 'devops_pipeline'
});

module.exports = mongoose.model('DevopsPipeline', DevopsPipeline);