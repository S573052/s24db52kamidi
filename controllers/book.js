var book = require('../models/book');
// List of all book
// List of all book
exports.book_list = async function(req, res) {
    try{
    thebook = await book.find();
    res.send(thebook);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
// VIEWS
// Handle a show all view
exports.book_view_all_Page = async function(req, res) {
try{
thebook = await book.find();
res.render('book', { title: 'book Search Results', results: thebook });
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
var express = require('express');
const book_controlers= require('../controllers/book');
var router = express.Router();

// for a specific Costume.
exports.book_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
    result = await book.findById( req.params.id)
    res.send(result)
    } catch (error) {
    res.status(500)
    res.send(`{"error": document for id ${req.params.id} not found`);
    }
    };
    

    
// for a specific book.
// exports.book_detail = function(req, res) {
// res.send('NOT IMPLEMENTED: book detail: ' + req.params.id);
// };
// Handle book create on POST.
// Handle book create on POST.
exports.book_create_post = async function(req, res) {
    console.log(req.body)
    let document = new book();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.book_title = req.body.book_title;
    document.book_author = req.body.book_author;
    document.book_rating = req.body.book_rating;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    }
    
    
// Handle book delete from on DELETE.
exports.book_delete = function(req, res) {
res.send('NOT IMPLEMENTED: book delete DELETE ' + req.params.id);
};
// Handle book update form on PUT.
// exports.book_update_put = function(req, res) {
// res.send('NOT IMPLEMENTED: book update PUT' + req.params.id);
// };
//Handle Costume update form on PUT.
exports.book_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
let toUpdate = await book.findById( req.params.id)
// Do updates of properties
if(req.body.book_title)
toUpdate.book_title = req.body.book_title;
if(req.body.book_author) toUpdate.book_author = req.body.book_author;
if(req.body.book_rating) toUpdate.book_rating = req.body.book_rating;
let result = await toUpdate.save();
console.log("Sucess " + result)
res.send(result)
} catch (err) {
res.status(500)
res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
}
};
