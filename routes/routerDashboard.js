var express = require('express');
var router = express.Router();
var controllerDashboard = require('../controllers/controllerDashboard');


/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('/');
// });

// router.get('/home', function(req, res, next) {
//     res.send('/HOME');
// });

router.get('/', controllerDashboard.dashboard);
router.get('/insert', controllerDashboard.insertItem);
router.get('/delete/:id', controllerDashboard.deleteItem);
//router.get('/:id', controllerDashboard.getItem);
//router.get('/', controllerHome.itensList);

module.exports = router;