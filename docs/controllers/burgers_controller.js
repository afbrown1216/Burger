 const express = require("express"); 
const burger = require("../docs/models/burger.js");

const router = express.Router();

router.get('/', function (req,res) {
    burger.all(function (data) {
        
        var hbsObject = {
            burgers: data
        }; 
        console.log('asdads',hbsObject); 
        res.render("index", hbsObject);
    });
});

router.post('/api/burgers', function (req, res) {
    //console.log("req",req,"res",res);
    burger.create([
        "burger_name", "devoured"
    ], [
        req.body.burger_name, req.body.devoured
    ], function (result) {
        res.json({id: result.insertId});
    });
});

router.put('/api/burgers/:id', function (req,res) {


    const condition = 'id = ' + req.params.id;
    console.log("condition", condition ); 
    // console.log("worked", req.body.devoured);

    burger.update({
        devoured: req.body.devoured
    }, req.params.id, function(result) {
        res.json({id: result.insertId})
        // if (result.changedRows == 0 ){
        //     console.log("didnt work in update");
        //     return res.status(404).end();
        // } else {
        //     console.log("burger update worked");
        //     res.status(200).end();
        // }
    });
});

router.delete('/api/burgers/:id', function(req,res) {
    const condition = "id =" + req.params.id; 

    burger.delete(condition, function(result) {
        if (result.affectedRows == 0){
            return res.status(404).end();
        }else { 
            res.status(200).end();
        }
    });
});







module.exports = router; 