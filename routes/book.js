var express = require('express');
const book_controlers= require('../controllers/book');
var router = express.Router();
/* GET costumes */
router.get('/', book_controlers.book_view_all_Page );

router.get('/detail', book_controlers.book_view_one_Page);
module.exports = router;



