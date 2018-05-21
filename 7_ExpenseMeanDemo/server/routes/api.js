const express = require('express');
const router = express.Router();

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';
var mongoose = require('mongoose');
var User = require('../models/User.js');

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

var da = require('../dataaccess');

router.get('/posts', function (req, res, next) {
  da.getAllUsers(function (data) {
    res.send(data);
  });
});

router.get('/posts/create', function (req, res, next) {
  console.log("in create user route")  
  res.send({"test":"test"});
});

router.post('/posts/createpost', function (req, res, next) {
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var country = req.body.country;
  var qualification = req.body.qualification;


  var user = { "firstname": firstname, "lastname": lastname , "country" : country , "qualification" : qualification };
  console.log("inside post of user creation ::"+user);
  da.insertUser(user, function (r) {
    res.redirect("usersview");
  });
});



/* GET ALL UserS */
router.get('/users', function(req, res, next) {
  User.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE User BY ID */
router.get('/user/:id', function(req, res, next) {
  User.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE User */
router.post('/user', function(req, res, next) {
  console.log("in post user");
  console.log(req.body);
  User.create(req.body, function (err, post) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});

/* UPDATE User */
router.put('/user/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE User */
router.delete('/userdelete/:id', function(req, res, next) {
  console.log("in delete function"+req.params.id);
  User.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* SAVE User */
router.post('/register', function(req, res, next) {
  console.log("in register user");
  console.log(req.body);
  User.create(req.body, function (err, post) {
    if (err) {
      console.log(err);
      return next(err);
    }
    res.json(post);
  });
});



module.exports = router;