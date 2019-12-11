var express = require("express");
var router = express.Router();

router.get("/", function(req, res, next) {
  // res.send('respond with a resource');
  res.json([
    {
      id: 1,
      author: "John Foley",
      date: "11-December-2019",
      text: "Damn dude. Get some therapy",
      image: "../public/images/lib_ridge.png"
    }
  ]);
});

module.exports = router;
