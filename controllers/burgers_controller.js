const express = require("express"); 
const burger = require("../models/burger.js");

const router = express.Router();

router.get('/', function (req,res) {
    burger.all(function (data) {
        var hbsObject = {
            burger: data
        }; 
        console.log(hbsObject); 
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', function (req, res) {
    burgers.create([
        "name", "sleepy"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({id: result.insertId});
    });
});

// router.put('/api/burgers/:id', function (req,res) )








module.exports = router; 