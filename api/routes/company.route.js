const express = require('express');
const app = express();
const companyRoutes = express.Router();
bodyParser = require('body-parser');
app.use(bodyParser.json());
// Require Business model in our routes module
let Company = require('../models/Company');

// Defined store route
companyRoutes.route('/add').post(function (req, res) {
  let company = new Company(req.body);
  company.save()
    .then(company => {
      res.status(200).json({'company route': 'company record added successfully'});
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

// Defined get data(index or listing) route
companyRoutes.route('/').get(function (req, res) {
    Company.find(function (err, companies){
    if(err){
      console.log(err);
    }
    else {
      res.json(companies);
    }
  });
});

// Defined edit route
companyRoutes.route('/edit/:id').get(function (req, res) {
  let id = req.params.id;
  Company.findById(id, function (err, company){
      res.json(company);
  });
});

//  Defined update route
companyRoutes.route('/update/:id').post(function (req, res) {
    Company.findById(req.params.id, function(err, company) {
    if (!company)
      return next(new Error('Could not load Document'));
    else {
        company.company_name = req.body.company_name;

        company.save().then(company => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

// Defined delete | remove | destroy route
companyRoutes.route('/delete/:id').get(function (req, res) {
    Company.findByIdAndRemove({_id: req.params.id}, function(err, company){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = companyRoutes;