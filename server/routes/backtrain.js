const express = require("express");
const { getAllTrains } = require("../controllers/traincontrollers");
const router = express.Router();

router.get("/trains/train", getAllTrains);

module.exports = router;
