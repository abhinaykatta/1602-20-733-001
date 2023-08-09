const express = require("express");
const { getAllTrains, getATrain } = require("../controllers/traincontrollers");
const router = express.Router();

router.get("/train/trains", getAllTrains);
router.get("/train/trains/:id", getATrain);

module.exports = router;
