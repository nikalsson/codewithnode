const express = require('express');
const router = express.Router();
const multer = require('multer');
const upload = multer({'dest': 'uploads/'});
const { asyncErrorHandler } = require('../middleware');
const { 
  postIndex, 
  postNew, 
  postCreate, 
  postShow,
  postEdit, 
  postUpdate, 
  postDelete 
} = require('../controllers/posts');

/* GET posts index, /posts */
router.get('/', asyncErrorHandler(postIndex));

/* GET posts new, /posts/new */
router.get('/new', postNew); // newPost is not async function --> no asyncErrorHandler

/* POST posts create, /posts -- multer upload name string matches the one in surfshop\views\posts\new.ejs input field name attribute*/
router.post('/', upload.array('images', 4), asyncErrorHandler(postCreate));

/* GET posts show, /posts/:id */
router.get('/:id', asyncErrorHandler(postShow));

/* GET posts edit, /posts/:id/edit */
router.get('/:id/edit', asyncErrorHandler(postEdit));

/* PUT posts update, /posts/:id */
router.put('/:id', asyncErrorHandler(postUpdate));

/* DELETE posts delete, /posts/:id */
router.delete('/:id', asyncErrorHandler(postDelete));

module.exports = router;


/* 
Restful routing reminder

GET index       /posts
GET new         /posts/new
POST create     /posts
GET show        /posts/:id
GET edit        /posts/:id/edit
PUT update      /posts/:id
DELETE delete   /posts/:id 
*/