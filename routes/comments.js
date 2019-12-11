var express = require("express");
var router = express.Router();

/* GET comments listing. */
router.get("/", function(req, res, next) {
  // res.send('respond with a resource');
  res.json([
    {
      id: 1,
      author: "Mark Briggs",
      comment: "Damn dude. Get some therapy"
    },
    {
      id: 2,
      author: "Melinda Sillup",
      comment:
        "A friend once told me this work is never easy, but always worthy"
    },
    {
      id: 3,
      author: "Grumpy",
      comment: "I have never read bigger piece of overwrought bullshit"
    }
  ]);
});

module.exports = router;
