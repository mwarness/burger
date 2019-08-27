var express = require("express");
var burger = require("../models/burger");
var router = express.Router();

router.get("/",function(req,res){
    res.redirect("/allBurgers")
    
});

router.get("/allBurgers",function(req,res){
    burger.selectAll(function(burgerData){
        res.render("index",{burgerData:burgerData})


    })
    
});


router.post("/burgers/create", function(req, res) {
    burger.insertOne([
      "burgerName"
    ], [
      req.body.burgerName 
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
      console.log(result);
      res.redirect("/");
    });
  });
  
  router.put("/burgers/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    cat.update({
      sleepy: req.body.sleepy
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


module.exports = router;