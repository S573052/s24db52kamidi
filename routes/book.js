var express = require('express');
const book_controlers= require('../controllers/book');
// A little function to check if we have an authorized user and continue on
// redirect to login.
const secured = (req, res, next) => {
if (req.user){
return next();
}
res.redirect("/login");
}
var router = express.Router();

/* GET costumes */
router.get('/', book_controlers.book_view_all_Page );

router.get('/detail', book_controlers.book_view_one_Page);
router.get('/create',secured, book_controlers.book_create_Page);
router.get('/update',secured, book_controlers.book_update_Page);
router.get('/delete',secured, book_controlers.book_delete_Page);

module.exports = router;



