const express = require("express");
const router = express.Router();
const {
  createUser,
  getMatches,
  shortlistUser,
} = require("../controllers/userController");

router.post("/users", createUser);

router.get("/matches/:username", getMatches);

router.post("/shortlist/:username", shortlistUser);

module.exports = router;