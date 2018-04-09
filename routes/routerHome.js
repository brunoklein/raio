var express = require('express');
var router = express.Router();
var controllerHome = require('../controllers/controllerHome');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('/');
// });

// router.get('/home', function(req, res, next) {
//     res.send('/HOME');
// });

router.get('/', controllerHome.itensList);
router.get('/:id', controllerHome.getItem);

module.exports = router;