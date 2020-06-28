const orm = require("../config/orm.js");
const express = require("express");
let router = express.Router();
// create routes
// forgot to render
router.get("/", (req, res) => {
  orm
    .selectAll((data) => {
      let hbsObject = {
        burgers: data,
      };
      res.render("index", hbsObject);
    })
    .then((result) => {
      // can use .then because we made a promise

      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
});

router.post("/api/burger", (req, res) => {
  orm
    .insertOne(
      //not sure about this??
      ["burger", "devoured"],
      [req.body.burger, req.body.devoured]
    )
    .then((result) => {
      // can use .then because we made a promise
      // send back json
      res.json({ id: result.insertOne });
    })
    .catch((err) => {
      console.error(err);
    });
});

router.put("/api/burger/:id", (req, res) => {
  orm.updateOne(req.body.id);
});

module.exports = router;
