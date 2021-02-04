const express = require("express");
const router = express.Router();
const calculate = require("../calculator/index");

router.get("/calculate/:formula", (req, res) => {
  try {
    let val = calculate(req.params["formula"]);
    res.status(200).send({ calculated: val });
  } catch (error) {
    res.status(400).send({ calculated: "Invalid Input" });
  }
});

router.get("/", (req, res) => {
  res.status(404).send({ error: "Nothing has been implemented yet" });
});

module.exports = router;
