const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController')

const router = express.Router();

router.get('/', viewsController.getLandingPAge);
router.get('/loans', viewsController.getAllLoans);
router.get('/login', viewsController.getLoginForm);
router.get('/signup', viewsController.getSignInForm);
router.get('/newLoan', viewsController.createNewLoan);

router.get('/');
router.post('/signup',authController.signup);
router.post('/login',authController.login);

module.exports = router;
