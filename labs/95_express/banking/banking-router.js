var express = require('express');
var router = express.Router();

router.get("/", function(req, res) {
    res.send("You are in the home page of core banking");
});

module.exports = router;