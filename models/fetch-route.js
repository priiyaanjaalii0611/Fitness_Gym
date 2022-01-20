var express = require('express');
const fetchController = require('./fetch-controller');
var router = express.Router();
var userController= require('./fetch-controller');
router.post('./fetch-data', fetchController.fetchData);
module.exports = router;