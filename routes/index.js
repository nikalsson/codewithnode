const express = require('express');
const router = express.Router();
const { postRegister, postLogin, getLogout } = require('../controllers'); // JS finds a file called index by default
const { errorHandler } = require('../middleware');

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Surf Shop - Home' });
});

/* GET /register */
router.get('/register', (req, res, next) => {
  res.send('GET /register')
});

/* POST /register */
router.post('/register', errorHandler(postRegister));

/* GET /login */
router.get('/login', (req, res, next) => {
  res.send('GET /login')
});

/* POST /login */
router.post('/login', postLogin);

/* GET /login */
router.get('/logout', getLogout);

/* GET /forgot-password */
router.get('/forgot-password', (req, res, next) => {
  res.send('GET /forgot-password')
});

/* PUT /forgot-password */
router.put('/forgot-password', (req, res, next) => {
  res.send('PUT /forgot-password')
});

/* GET /reset-password/:token */
router.get('/reset-password/:token', (req, res, next) => {
  res.send('GET /reset-password/:token')
});

/* PUT /reset-password/:token */
router.put('/reset-password/:token', (req, res, next) => {
  res.send('PUT /reset-password/:token')
});

/* GET /profile */
router.get('/profile', (req, res, next) => {
  res.send('GET /profile')
});

/* PUT /profile/:user_id */
router.put('/profile/:user_id', (req, res, next) => {
  res.send('UPDATE /profile/:user_id')
});

module.exports = router;
