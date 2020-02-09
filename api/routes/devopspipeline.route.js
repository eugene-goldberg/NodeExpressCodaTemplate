const express = require('express');
const app = express();
const pipelineRoutes = express.Router();
bodyParser = require('body-parser');
app.use(bodyParser.json());
// Require Business model in our routes module
let DevopsPipeline = require('../models/DevopsPipeline');

// Defined store route
pipelineRoutes.route('/add').post(function (req, res) {
  let pipeline = new DevopsPipeline(req.body);
  pipeline.save()
    .then(pipeline => {
      res.status(200).json({'devops pipeline': 'pipeline record added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
pipelineRoutes.route('/').get(function (req, res) {
    DevopsPipeline.find(function (err, pipelines){
    if(err){
      console.log(err);
    }
    else {
      res.json(pipelines);
    }
  });
});

// Defined edit route
pipelineRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  DevopsPipeline.findById(id, function (err, pipeline){
      res.json(pipeline);
  });
});

//  Defined update route
pipelineRoutes.route('/update/:id').post(function (req, res) {
    DevopsPipeline.findById(req.params.id, function(err, pipeline) {
    if (!pipeline)
      return next(new Error('Could not load Document'));
    else {
        pipeline.company_name = req.body.company_name;
        pipeline.program_name = req.body.program_name;
        pipeline.application_name = req.body.application_name;
        pipeline.application_component_name = req.body.application_component_name;
        pipeline.hosting_model = req.body.hosting_model;
        pipeline.environment = req.body.environment;
        pipeline.pipeline_name = req.body.pipeline_name;
        pipeline.pipeline_type = req.body.pipeline_type;

        pipeline.save().then(pipeline => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
pipelineRoutes.route('/delete/:id').get(function (req, res) {
    DevopsPipeline.findByIdAndRemove({_id: req.params.id}, function(err, pipeline){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = pipelineRoutes;