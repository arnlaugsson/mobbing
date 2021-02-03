
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(404).send({ error: "Nothing has been implemented yet" });
});

module.exports = router;