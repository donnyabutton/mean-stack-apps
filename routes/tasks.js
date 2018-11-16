const express = require("express");
const router = express.Router();
const mongojs = require("mongojs");
const db = mongojs(
  "mongodb://donnyabutton:1c3pmg82@ds161446.mlab.com:61446/mytasklist_donny",
  ["tasks"]
);

router.get("/tasks", (req, res, next) => {
  db.tasks.find((err, tasks) => {
    console.log(tasks);
    if (err) {
      res.send(err);
    }
    res.json(tasks);
  });
});

module.exports = router;
