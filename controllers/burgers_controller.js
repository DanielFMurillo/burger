var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req, res){
 burger.selectAll(function(data){
 var hbsObject = {
     burger: data
 };
    console.log(hbsObject)
    res.render("index", hbsObject);
 });
});

router.post("/", function(req, res){
 burger.insertOne([
     "name"
  ], [
     req.body.name
  ], function() {
     res.redirect("/");
     });
});

router.put("/burger/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

burger.updateOne({
    devoured: true
  }, condition, function() {
      res.redirect("/");
  });
});

module.exports = router;
