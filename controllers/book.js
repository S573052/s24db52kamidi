var book = require('../models/book');
// List of all books
exports.book_list = function(req, res) {
res.send('NOT IMPLEMENTED: book list');
};
// for a specific book.
exports.book_detail = function(req, res) {
res.send('NOT IMPLEMENTED: book detail: ' + req.params.id);
};
// Handle book create on POST.
exports.book_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: book create POST');
};
// Handle book delete from on DELETE.
exports.book_delete = function(req, res) {
res.send('NOT IMPLEMENTED: book delete DELETE ' + req.params.id);
};
// Handle book update form on PUT.
exports.book_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: book update PUT' + req.params.id);
};
