const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json({ message: "data sent!" });
});

router.get("/:id", (req, res) => {
  let id = req.params.id;
  res.status(200).json({ message: `${id} received` });
});

// router.post();

module.exports = router;
